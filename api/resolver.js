const {
  forces,
  force,
  forcePeople,
  lastUpdated,
  streetLevelCrimes
} = require('./routes');

const resolver = {
  hello: () => 'World',
  forces,
  force,
  forcePeople,
  lastUpdated,
  streetLevelCrimes
};

module.exports = resolver;
