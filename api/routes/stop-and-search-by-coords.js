const request = require('request-promise');
const { getLocationUrlPart } = require('./utils');

const stopAndSearchByCoords = async data => {
  const locationUrlPart = data.location
    ? getLocationUrlPart(data.location)
    : '';
  const date = data.date || null;
  const dateUrlPart = date ? `date=${date}&` : '';
  const url = `https://data.police.uk/api/stops-street?${dateUrlPart}${locationUrlPart}`;
  const result = await request.get({ url, json: true });
  return result;
};

module.exports = stopAndSearchByCoords;
