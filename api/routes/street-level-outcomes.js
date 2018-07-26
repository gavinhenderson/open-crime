const request = require('request-promise');
const { getLocationUrlPart } = require('./utils');

const streetLevelOutcomesByCoords = async data => {
  const locationUrlPart = data.location
    ? getLocationUrlPart(data.location)
    : '';
  const dateUrlPart = data.date ? `&date=${data.date}` : '';
  const url = `https://data.police.uk/api/outcomes-at-location?${dateUrlPart}&${locationUrlPart}`;
  const result = await request.get(url);
  return JSON.parse(result);
};

const streetLevelOutcomesByLocationId = async (data) => {
  const locationIdUrlPart = data.locationId ? `location_id=${data.locationId}` : '';
  const dateUrlPart = `&date=${data.date}` : '';
  const url =
}

module.exports = {
  streetLevelOutcomesByCoords,
  streetLevelOutcomesByLocationId
};
