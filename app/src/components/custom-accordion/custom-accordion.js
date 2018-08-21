import React from 'react';
import { Accordion } from 'semantic-ui-react';

class CustomAccordion extends React.Component {
  state = {
    active: false
  };

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { title, information, children } = this.props;

    return (
      <Accordion styled>
        <Accordion.Title onClick={this.handleClick}>{title}</Accordion.Title>
        <Accordion.Content active={this.state.active}>
          {children}
        </Accordion.Content>
      </Accordion>
    );
  }
}

export default CustomAccordion;
