const request = require('request-promise');

module.exports = async () => {
  const result = await request.get(
    'https://data.police.uk/api/crime-last-updated'
  );
  return JSON.parse(result);
};
