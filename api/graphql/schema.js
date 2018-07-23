const schema = `
type Force {
  id: String
  name: String
}

type Query {
  hello: String
  forces: [Force]
}
`;

const { buildSchema } = require('graphql');
module.exports = buildSchema(schema);
