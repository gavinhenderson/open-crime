const request = require('request-promise');
const { getLocationUrlPart } = require('./utils');

const crimesAtLocation = async (date, locationUrlPart) => {
  const dateUrlPart = date ? `date=${date}&` : '';
  const url = `https://data.police.uk/api/crimes-at-location?${dateUrlPart}${locationUrlPart}`;
  const result = await request.get({ url, json: true });
  return result;
};

const crimesAtLocationByCoords = async data => {
  const locationUrlPart = data.location
    ? getLocationUrlPart(data.location)
    : '';
  const date = data.date || null;
  return await crimesAtLocation(date, locationUrlPart);
};

const crimesAtLocationByLocationId = async data => {
  const locationUrlPart = data.locationId
    ? `location_id=${data.locationId}`
    : '';
  const date = data.date || null;
  return await crimesAtLocation(date, locationUrlPart);
};

module.exports = {
  crimesAtLocationByCoords,
  crimesAtLocationByLocationId
};
