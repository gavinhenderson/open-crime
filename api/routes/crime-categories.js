const request = require("request-promise");

module.exports = async data => {
  const dateUrlPart = data.date ? `?date=${data.date}` : "";
  const url = `https://data.police.uk/api/crime-categories${dateUrlPart}`;
  const result = await request.get({ url, json: true });
  return result;
};
