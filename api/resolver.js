const { forces, force, forcePeople, lastUpdated } = require('./routes');

const resolver = {
  hello: () => 'World',
  forces,
  force,
  forcePeople,
  lastUpdated
};

module.exports = resolver;
