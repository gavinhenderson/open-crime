const request = require("request-promise");

module.exports = async data => {
  const categoryUrlPart = `category=${data.category}`;
  const forceUrlPart = `&force=${data.force}`;
  const dateUrlPart = data.date ? `&date=${data.date}` : "";
  const url = `https://data.police.uk/api/crimes-no-location?${categoryUrlPart}${forceUrlPart}${dateUrlPart}`;
  const result = await request.get({ url, json: true });
  return result;
};
