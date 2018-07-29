const routes = require("./routes");

const resolver = {
  hello: () => "World",
  ...routes
};

module.exports = resolver;
