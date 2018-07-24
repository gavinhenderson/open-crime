const { forces, force, forcePeople } = require('./routes');

const resolver = {
  hello: () => 'World',
  forces,
  force,
  forcePeople
};

module.exports = resolver;
