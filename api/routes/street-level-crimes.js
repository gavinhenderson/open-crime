const request = require('request-promise');

module.exports = async data => {
  let date = data.date ? `&date=${data.date}` : '';
  let location = '';
  if (data.location.length === 1) {
    location = `lat=${data.location[0].lat}&lng=${data.location[0].long}`;
  } else {
    location = `poly=`;
    let locations = [];
    data.location.forEach(current => {
      locations.push(`${current.lat},${current.long}`);
    });
    location += locations.join(':');
  }

  const crimeCategory = data.crimeCategory ? data.crimeCategory : 'all-crime';

  const url = `https://data.police.uk/api/crimes-street/${crimeCategory}?${location}${date}`;
  console.log(url);

  const result = await request.get(url);

  return JSON.parse(result);
};
