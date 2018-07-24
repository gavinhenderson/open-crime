const request = require('request-promise');

module.exports = async data => {
  const result = await request.get(
    `https://data.police.uk/api/forces/${data.forceId}`
  );
  return JSON.parse(result);
};
