import React from 'react';
import { CustomAccordion, ForceInformation } from '../';

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
      <CustomAccordion title="Force Information">
        <ForceInformation location={this.props.location} />
      </CustomAccordion>
    );
  }
}

export default AccordionGrid;
