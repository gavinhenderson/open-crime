import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Accordion } from 'semantic-ui-react';

class InfoArea extends React.Component {
  state = {
    activeIndex: 0
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    return (
      <Query query={GET_INFO} variables={this.props.location}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) {
            console.log('ERROR', error);
            return null;
          }

          const { activeIndex } = this.state;

          return (
            <Accordion styled>
              <Accordion.Title index={1} onClick={this.handleClick}>
                Force Information
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                Test
              </Accordion.Content>
            </Accordion>
          );
        }}
      </Query>
    );
  }
}

export default InfoArea;

const GET_INFO = gql`
  query getForceInfo($lng: Float, $lat: Float) {
    locateNeighbourhood() {
      force
      neighbourhood
    }
  }
`;
