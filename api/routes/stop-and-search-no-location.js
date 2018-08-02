const request = require('request-promise');

const stopAndSearchNoLocation = async data => {
  console.log('TEST');
  const forceUrlPart = data.force ? `force=${data.force}` : '';
  const date = data.date || null;
  const dateUrlPart = date ? `&date=${date}` : '';
  const url = `https://data.police.uk/api/stops-no-location?${forceUrlPart}${dateUrlPart}`;
  const result = await request.get({ url, json: true });
  return result;
};

module.exports = stopAndSearchNoLocation;
