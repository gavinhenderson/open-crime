const schema = `
type Query {
  hello: String
}
`;

const { buildSchema } = require('graphql');
module.exports = buildSchema(schema);
