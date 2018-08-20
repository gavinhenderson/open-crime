import React from 'react';
import { Button } from 'semantic-ui-react';
import { Map, InfoArea, NavBar } from '../components';
import '../styling/nav-bar.less';
import '../styling/map.less';

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
        <NavBar />
        <Map
          defaultLocation={START_LOCATION}
          onLocationChange={this.onLocationChange}
          className={'map-container'}
        />
        <div>
          <Button>Update Location</Button>
        </div>
        <InfoArea location={this.state.mapLocation} />
      </div>
    );
  }
}

export default Home;

const START_LOCATION = {
  lat: 53.478311,
  lng: -2.245347
};
