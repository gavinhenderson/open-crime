const request = require('request-promise');

module.exports = async data => {
  const url = `https://data.police.uk/api/${data.force}/${
    data.neighbourhood
  }/boundary`;
  const result = await request.get({ url, json: true });
  return result;
};
