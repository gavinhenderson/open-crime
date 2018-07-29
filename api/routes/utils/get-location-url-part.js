module.exports = locations => {
  let locationUrlPart = "";
  if (locations.length === 1) {
    locationUrlPart = `lat=${locations[0].lat}&lng=${locations[0].long}`;
  } else {
    locationUrlPart = `poly=`;
    let locationParts = [];
    locations.forEach(current => {
      locationParts.push(`${current.lat},${current.long}`);
    });
    locationUrlPart += locationParts.join(":");
  }
  return locationUrlPart;
};
