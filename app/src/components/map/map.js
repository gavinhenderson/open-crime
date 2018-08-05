import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class Map extends React.Component {
  state = {
    markerPos: this.props.defaultLocation
  };

  constructor(props) {
    super(props);
  }

  onMapClick = event => {
    this.setState({
      markerPos: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
    });
    this.props.onLocationChange(event);
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
