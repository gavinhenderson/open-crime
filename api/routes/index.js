const forces = require('./forces');
const force = require('./force');
const forcePeople = require('./force-people');
const lastUpdated = require('./last-updated');
const streetLevelCrimes = require('./street-level-crimes');
const crimesNoLocation = require('./crimes-no-location');
const crimeCategories = require('./crime-categories');
const outcomeForCrime = require('./outcome-for-crime');
const neighbourhoods = require('./neighbourhoods');
const specificNeighbourhood = require('./specific-neighbourhood');
const neighbourhoodBoundary = require('./neighbourhood-boundary');
const neighbourhoodTeam = require('./neighbourhood-team');
const neighbourhoodEvents = require('./neighbourhood-events');
const neighbourhoodPriorities = require('./neighbourhood-priorities');
const {
  streetLevelOutcomesByCoords,
  streetLevelOutcomesByLocationId
} = require('./street-level-outcomes');
const {
  crimesAtLocationByCoords,
  crimesAtLocationByLocationId
} = require('./crimes-at-location');

module.exports = {
  forces,
  force,
  forcePeople,
  lastUpdated,
  streetLevelCrimes,
  streetLevelOutcomesByCoords,
  streetLevelOutcomesByLocationId,
  crimesAtLocationByCoords,
  crimesAtLocationByLocationId,
  crimesNoLocation,
  crimeCategories,
  outcomeForCrime,
  neighbourhoods,
  specificNeighbourhood,
  neighbourhoodBoundary,
  neighbourhoodTeam,
  neighbourhoodEvents,
  neighbourhoodPriorities
};
