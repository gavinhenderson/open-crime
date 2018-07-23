const { forces } = require('./routes');

const resolver = {
  hello: () => 'World',
  forces
};

module.exports = resolver;
