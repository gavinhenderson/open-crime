const request = require("request-promise");

module.exports = async () => {
  const url = "https://data.police.uk/api/crime-last-updated";
  const result = await request.get({ url, json: true });
  return result;
};
