const request = require("request-promise");

module.exports = async data => {
  const { forceId } = data;
  const url = `https://data.police.uk/api/forces/${forceId}/people`;
  const result = await request.get({ url, json: true });
  return result;
};
