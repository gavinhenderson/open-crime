module.exports = locations => {
  let location = '';
  if (locations.length === 1) {
    location = `lat=${locations[0].lat}&lng=${locations[0].long}`;
  } else {
    location = `poly=`;
    let locationParts = [];
    locations.forEach(current => {
      locationParts.push(`${current.lat},${current.long}`);
    });
    location += locationParts.join(':');
  }
  return location;
};
