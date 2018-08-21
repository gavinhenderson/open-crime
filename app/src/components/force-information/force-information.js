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

      if (!force) return null;

      return (
        <Query query={FORCE_INFO} variables={{ forceId: force }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) {
              console.log(error);
              return null;
            }

            const { force, forcePeople } = data;

            if (!force) return null;

            console.log(force.engagement_methods);
            return (
              <div>
                {force.description && (
                  <p>{force.description.replace(/<(?:.|\n)*?>/gm, '')}</p>
                )}
                {force.url && <p>{force.url}</p>}
                {force.telephone && <p>{force.telephone}</p>}
                {force.name && <p>{force.name}</p>}

                {/* {forcePeople.map(person => ())}
                    {forcePeople.mma.engagement_methods.map((currentMethod, index) => (
                      <div key={`engagement_method_${index}`}>
                        {currentMethod.url && <div>{currentMethod.url}</div>}
                        {currentMethod.type && <div>{currentMethod.type}</div>}
                        {currentMethod.description && (
                          <div>{currentMethod.description}</div>
                        )}

                        {currentMethod.title && <div>{currentMethod.title}</div>}
                      </div>
                    ))} */}
              </div>
            );
          }}
        </Query>
      );
    }}
  </Query>
);

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
