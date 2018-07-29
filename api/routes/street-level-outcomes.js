const request = require("request-promise");
const { getLocationUrlPart } = require("./utils");

const streetLevelOutcomes = async (date, locationUrlPart) => {
  const dateUrlPart = date ? `date=${date}&` : "";
  const url = `https://data.police.uk/api/outcomes-at-location?${dateUrlPart}${locationUrlPart}`;
  const result = await request.get({ url, json: true });
  return result;
};

const streetLevelOutcomesByCoords = async data => {
  const locationUrlPart = data.location
    ? getLocationUrlPart(data.location)
    : "";
  const date = data.date || null;
  return await streetLevelOutcomes(date, locationUrlPart);
};

const streetLevelOutcomesByLocationId = async data => {
  const locationUrlPart = data.locationId
    ? `location_id=${data.locationId}`
    : "";
  const date = data.date || null;
  return await streetLevelOutcomes(date, locationUrlPart);
};

module.exports = {
  streetLevelOutcomesByCoords,
  streetLevelOutcomesByLocationId
};
