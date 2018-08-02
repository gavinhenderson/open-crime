const request = require('request-promise');
const { getLocationUrlPart } = require('./utils');

const stopAndSearchByLocationId = async data => {
  const locationUrlPart = data.locationId
    ? `location_id=${data.locationId}`
    : '';
  const date = data.date || null;
  const dateUrlPart = date ? `date=${date}&` : '';
  const url = `https://data.police.uk/api/stops-at-location?${dateUrlPart}${locationUrlPart}`;
  const result = await request.get({ url, json: true });
  return result;
};

module.exports = stopAndSearchByLocationId;
