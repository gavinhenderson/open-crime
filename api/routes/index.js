const forces = require("./forces");
const force = require("./force");
const forcePeople = require("./force-people");
const lastUpdated = require("./last-updated");
const streetLevelCrimes = require("./street-level-crimes");
const {
  streetLevelOutcomesByCoords,
  streetLevelOutcomesByLocationId
} = require("./street-level-outcomes");
const {
  crimesAtLocationByCoords,
  crimesAtLocationByLocationId
} = require("./crimes-at-location");

module.exports = {
  forces,
  force,
  forcePeople,
  lastUpdated,
  streetLevelCrimes,
  streetLevelOutcomesByCoords,
  streetLevelOutcomesByLocationId,
  crimesAtLocationByCoords,
  crimesAtLocationByLocationId
};
