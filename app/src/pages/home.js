import React from 'react';
import { Button } from 'semantic-ui-react';
import { Map, AccordionGrid, NavBar, Footer } from '../components';
import '../styling/nav-bar.less';
import '../styling/map.less';
import '../styling/footer.less';
import '../styling/home.less';

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
      <div className={'page-container'}>
        <div className={'page-content'}>
          <NavBar />
          <Map
            defaultLocation={START_LOCATION}
            onLocationChange={this.onLocationChange}
            className={'map-container'}
          />

          <AccordionGrid location={this.state.mapLocation} />
        </div>
        <div className={'page-footer'}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;

const START_LOCATION = {
  lat: 53.478311,
  lng: -2.245347
};
