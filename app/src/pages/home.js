import React from "react";
import { Button } from "semantic-ui-react";
import { Map } from "../components";

class Home extends React.Component {
  state = {
    mapLocation: START_LOCATION
  };

  onLocationChange = event => {
    this.setState({
      mapLocation: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
    });
  };

  render() {
    return (
      <div>
        <Map
          defaultLocation={START_LOCATION}
          onLocationChange={this.onLocationChange}
        />
        <div>
          <p>{this.state.mapLocation.lat}</p>
          <p>{this.state.mapLocation.lng}</p>
          <Button>test button</Button>
        </div>
        {/* <InfoAccordion /> */}
      </div>
    );
  }
}

export default Home;

const START_LOCATION = {
  lat: 53.478311,
  lng: -2.245347
};
