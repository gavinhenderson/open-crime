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

type Date {
  date: String
}

type Location {
  lat: String
  long: String
}

type Street {
  id: String
  name: String
}

type SpecificLocation {
  latitude: String
  longitude: String
  street: Street
}

type StreetCrime {
  category: String
  location_type: String
  location: SpecificLocation
  context: String
  outcome_status: String
  persistent_id: String
  id: String
  location_subtype: String
  month: String
}

input InputLocation {
  lat: String
  long: String
}

type Query {
  hello: String
  forces: [Force]
  force(forceId: String): ForceInfo
  forcePeople(forceId: String): [Person]
  lastUpdated: Date
  streetLevelCrimes(location: [InputLocation], date: String): [StreetCrime]
}
`;

const { buildSchema } = require('graphql');
module.exports = buildSchema(schema);
