import React from 'react';
import Map from './map';

const MapContainer = ({ onLocationChange, defaultLocation }) => {
  const url = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
    process.env.MapsApiKey
  }`;
  return (
    <Map
      defaultLocation={defaultLocation}
      onLocationChange={onLocationChange}
      googleMapURL={url}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={
        <div style={{ height: `400px` }} className={'map-container'} />
      }
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default MapContainer;
