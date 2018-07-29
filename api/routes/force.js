const request = require("request-promise");

module.exports = async data => {
  const url = `https://data.police.uk/api/forces/${data.forceId}`;
  const result = await request.get({ url, json: true });
  return result;
};
