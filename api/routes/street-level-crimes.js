const request = require("request-promise");
const { getLocationUrlPart } = require("./utils");

module.exports = async data => {
  // There should actually be an error if there is no location
  const locationUrlPart = data.location
    ? getLocationUrlPart(data.location)
    : "";
  const crimeCategoryUrlPart = data.crimeCategory
    ? data.crimeCategory
    : "all-crime";
  const dateUrlPart = data.date ? `&date=${data.date}` : "";

  const url = buildUrl(locationUrlPart, dateUrlPart, crimeCategoryUrlPart);
  const result = await request.get({ url, json: true });
  return result;
};

const buildUrl = (locationPart, datePart, crimeCategoryPart) =>
  `https://data.police.uk/api/crimes-street/${crimeCategoryPart}?${locationPart}${datePart}`;
