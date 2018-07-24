const request = require('request-promise');

module.exports = async data => {
  const { forceId } = data;
  const result = await request.get(
    `https://data.police.uk/api/forces/${forceId}/people`
  );
  return JSON.parse(result);
};
