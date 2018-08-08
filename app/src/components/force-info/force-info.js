import React from 'react';
import { Query } from 'react-apollo';
import { Accordion } from 'semantic-ui-react';
import { toTitleCase } from '../utils';
import gql from 'graphql-tag';

const ForceInfo = ({ force, handleClick, active, index }) => (
  <Accordion styled>
    <Accordion.Title index={index} onClick={handleClick}>
      Force: {toTitleCase(force)}
    </Accordion.Title>
    <Query query={FORCE_INFO} variables={{ forceId: force }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) {
          console.log(error);
          return null;
        }

        const { force } = data;

        if (!force) return null;

        return (
          <Accordion.Content active={active}>
            <p>{force.url}</p>
          </Accordion.Content>
        );
      }}
    </Query>
    {/* */}
  </Accordion>
);

export default ForceInfo;

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
  }
`;
