import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { CustomAccordion } from '../';

class AccordionGrid extends React.Component {
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
            console.log(error);
            return null;
          }

          const { activeIndex } = this.state;
          const { force } = data.locateNeighbourhood;

          if (!force) return null;

          return (
            <CustomAccordion title="test" information="test">
              <h1>test</h1>
            </CustomAccordion>
          );
        }}
      </Query>
    );
  }
}

export default AccordionGrid;

const GET_INFO = gql`
  query getForceInfo($lng: Float, $lat: Float) {
    locateNeighbourhood(latitude: $lat, longitude: $lng) {
      force
      neighbourhood
    }
  }
`;
