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

type ContactDetails {
  twitter: String
}

type Person {
  bio: String
  contact_details: ContactDetails
  name: String
  rank: String
}

type Query {
  hello: String
  forces: [Force]
  force(forceId: String): ForceInfo
  forcePeople(forceId: String): [Person]
}
`;

const { buildSchema } = require('graphql');
module.exports = buildSchema(schema);
