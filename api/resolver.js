const { forces, force } = require('./routes');

const resolver = {
  hello: () => 'World',
  forces,
  force
};

module.exports = resolver;
