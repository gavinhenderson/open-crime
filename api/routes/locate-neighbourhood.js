const request = require('request-promise');

module.exports = async data => {
  const url = `https://data.police.uk/api/locate-neighbourhood?q=${
    data.latitude
  },${data.longitude}`;
  const result = await request.get({ url, json: true });
  return result;
};
