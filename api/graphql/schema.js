const schema = `
type Force {
  id: String
  name: String
}

type EngagementMethod {
  url: String
  type: String
  description: String
  title: String
}

type ForceInfo {
  description: String
  url: String
  engagement_methods: [EngagementMethod]
  telephone: String
  id: String
  name: String
}

type Query {
  hello: String
  forces: [Force]
  force(forceId: String): ForceInfo
}
`;

const { buildSchema } = require('graphql');
module.exports = buildSchema(schema);
