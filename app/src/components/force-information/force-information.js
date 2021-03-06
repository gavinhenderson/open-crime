import React from 'react';
import { Query } from 'react-apollo';
import { Accordion } from 'semantic-ui-react';
import { toTitleCase } from '../utils';
import gql from 'graphql-tag';

const ForceInfo = ({ location }) => (
  <Query query={GET_INFO} variables={location}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) {
        console.log(error);
        return null;
      }

      const { force } = data.locateNeighbourhood;

      if (!force) return <p>We don't have data for the force in this area</p>;

      return (
        <Query query={FORCE_INFO} variables={{ forceId: force }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) {
              console.log(error);
              return <p>We don't have data for the force in this area</p>;
            }

            const { force, forcePeople } = data;

            if (!force)
              return <p>We don't have data for the force in this area</p>;

            return (
              <div>
                {force.name && (
                  <p>
                    <span className={'accordion-content-label'}>Name: </span>
                    {force.name}
                  </p>
                )}
                {force.url && (
                  <p>
                    <span className={'accordion-content-label'}>Website: </span>
                    <a href={force.url}>{removedProtocolFromUrl(force.url)}</a>
                  </p>
                )}
                {force.telephone && (
                  <p>
                    <span className={'accordion-content-label'}>
                      Phone Number:{' '}
                    </span>
                    {force.telephone}
                  </p>
                )}
                {force.description && (
                  <p>
                    <span className={'accordion-content-label'}>
                      Description:{' '}
                    </span>
                    {force.description.replace(/<(?:.|\n)*?>/gm, '')}
                  </p>
                )}

                {force.engagement_methods &&
                  force.engagement_methods.length > 1 &&
                  generateEngagementMethodsList(force.engagement_methods)}
              </div>
            );
          }}
        </Query>
      );
    }}
  </Query>
);

const generateEngagementMethodsList = engagement_methods => {
  return (
    <div>
      <span className={'accordion-content-label'}>Engagement Methods: </span>
      <ul>
        {engagement_methods.map((currentMethod, index) => (
          <li key={`engagement_method_${index}`}>
            <a href={currentMethod.url}>{currentMethod.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const removedProtocolFromUrl = url => {
  return url.split('//').pop();
};

export default ForceInfo;

const GET_INFO = gql`
  query getForceInfo($lng: Float, $lat: Float) {
    locateNeighbourhood(latitude: $lat, longitude: $lng) {
      force
      neighbourhood
    }
  }
`;

const FORCE_INFO = gql`
  query getForceInfo($forceId: String) {
    force(forceId: $forceId) {
      description
      url
      telephone
      id
      name
      engagement_methods {
        url
        type
        description
        title
      }
    }
    forcePeople(forceId: $forceId) {
      bio
      name
      rank
      contact_details {
        email
        twitter
      }
    }
  }
`;
