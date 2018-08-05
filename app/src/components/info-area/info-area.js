import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

class InfoArea extends React.Component {
  render() {
    return (
      <Query query={GET_INFO}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) {
            console.log("ERROR", error);
            return null;
          }

          return (
            <ul>
              {data.forces.map((force, index) => (
                <li key={index}>{force.name}</li>
              ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default InfoArea;

const GET_INFO = gql`
  {
    forces {
      id
      name
    }
  }
`;
