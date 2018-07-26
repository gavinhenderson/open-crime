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
  // return [
  //   {
  //     category: 'anti-social-behaviour',
  //     location_type: 'Force',
  //     location: {
  //       latitude: '52.640961',
  //       street: {
  //         id: 884343,
  //         name: 'On or near Wharf Street North'
  //       },
  //       longitude: '-1.126371'
  //     },
  //     context: '',
  //     outcome_status: null,
  //     persistent_id: '',
  //     id: 54164419,
  //     location_subtype: '',
  //     month: '2017-01'
  //   }
  // ];
};
