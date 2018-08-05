import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class Map extends React.Component {
  state = {
    markerPos: {
      lat: 53.478311,
      lng: -2.245347
    }
  };

  onMapClick = event => {
    this.setState({
      markerPos: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
    });
  };

  render() {
    return (
      <GoogleMap
        onClick={this.onMapClick}
        defaultZoom={8}
        defaultCenter={this.state.markerPos}
      >
        <Marker position={this.state.markerPos} />
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(Map));
