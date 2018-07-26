const forces = require('./forces');
const force = require('./force');
const forcePeople = require('./force-people');
const lastUpdated = require('./last-updated');
const streetLevelCrimes = require('./street-level-crimes');
const {
  streetLevelOutcomesByCoords,
  streetLevelOutcomesByLocationId
} = require('./street-level-outcomes');

module.exports = {
  forces,
  force,
  forcePeople,
  lastUpdated,
  streetLevelCrimes,
  streetLevelOutcomesByCoords,
  streetLevelOutcomesByLocationId
};
