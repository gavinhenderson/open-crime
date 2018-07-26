The following query will test all the end points. It must be used with the given variables.

```JSON
{
  "Location": [
    {
      "lat": "52.629729",
      "long": "-1.131592"
    }
  ],
  "MultipleLocations": [
    {
      "lat": "52.268",
      "long": "0.543"
    },
    {
      "lat": "52.794",
      "long": "0.238"
    },
    {
      "lat": "52.130",
      "long": "0.478"
    }
  ]
}
```

```graphql
query AllEndPoints(
  $Location: [InputLocation]
  $MultipleLocations: [InputLocation]
) {
  differentCategory: streetLevelCrimes(
    location: $Location
    crimeCategory: "anti-social-behaviour"
  ) {
    category
    location_type
    location {
      latitude
      longitude
      street {
        id
        name
      }
    }
    context
    persistent_id
    outcome_status
    id
    location_subtype
    month
  }
  polyLocationsWithDate: streetLevelCrimes(
    location: $MultipleLocations
    date: "2017-01"
  ) {
    category
    location_type
    location {
      latitude
      longitude
      street {
        id
        name
      }
    }
    context
    persistent_id
    outcome_status
    id
    location_subtype
    month
  }
  singleLocationWithDate: streetLevelCrimes(
    location: $Location
    date: "2017-01"
  ) {
    category
    location_type
    location {
      latitude
      longitude
      street {
        id
        name
      }
    }
    context
    persistent_id
    outcome_status
    id
    location_subtype
    month
  }
  polyLocations: streetLevelCrimes(location: $MultipleLocations) {
    category
    location_type
    location {
      latitude
      longitude
      street {
        id
        name
      }
    }
    context
    persistent_id
    outcome_status
    id
    location_subtype
    month
  }
  singleLocation: streetLevelCrimes(location: $Location) {
    category
    location_type
    location {
      latitude
      longitude
      street {
        id
        name
      }
    }
    context
    persistent_id
    outcome_status
    id
    location_subtype
    month
  }
  lastUpdated {
    date
  }
  forcePeople(forceId: "leicestershire") {
    bio
    name
    rank
    contact_details {
      twitter
    }
  }
  force(forceId: "bedfordshire") {
    id
    name
    url
    description
    telephone
    engagement_methods {
      url
      type
      description
      title
    }
  }
  forces {
    id
    name
  }
}
```
