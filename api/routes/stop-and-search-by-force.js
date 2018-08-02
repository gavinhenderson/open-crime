const request = require('request-promise');

const stopAndSearchByForce = async data => {
  const forceUrlPart = data.force ? `force=${data.force}` : '';
  const date = data.date || null;
  const dateUrlPart = date ? `&date=${date}` : '';
  const url = `https://data.police.uk/api/stops-force?${forceUrlPart}${dateUrlPart}`;
  const result = await request.get({ url, json: true });
  return result;
};

module.exports = stopAndSearchByForce;
