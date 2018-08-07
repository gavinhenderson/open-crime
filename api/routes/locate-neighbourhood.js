const request = require('request-promise');

module.exports = async data => {
  const url = `https://data.police.uk/api/locate-neighbourhood?q=${
    data.latitude
  },${data.longitude}`;

  try {
    const result = await request.get({ url, json: true });
    return result;
  } catch (error) {
    if (error.statusCode === 404) {
      throw new Error('No force exists in this area');
    }
    throw error;
  }
};
