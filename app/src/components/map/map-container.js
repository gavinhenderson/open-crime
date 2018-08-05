import React from "react";
import Map from "./map";

const MapContainer = () => {
  const url = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
    process.env.MapsApiKey
  }`;
  return (
    <Map
      googleMapURL={url}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default MapContainer;
