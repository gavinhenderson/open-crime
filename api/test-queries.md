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
  stopAndSearchByForceWithoutDate: stopAndSearchByForce(
    force: "avon-and-somerset"
  ) {
    age_range
    self_defined_ethinicity
    outcome_linked_to_object_of_search
    datetime
    removal_of_more_than_outer_clothing
    operation
    operation_name
    location {
      longitude
      latitude
    }
    gender
    officer_defined_ethnicity
    legislation
    outcome
    type
    object_of_search
    involved_person
  }
  stopAndSearchByForceWithDate: stopAndSearchByForce(
    force: "avon-and-somerset"
    date: "2017-01"
  ) {
    age_range
    self_defined_ethinicity
    outcome_linked_to_object_of_search
    datetime
    removal_of_more_than_outer_clothing
    operation
    operation_name
    location {
      longitude
      latitude
    }
    gender
    officer_defined_ethnicity
    legislation
    outcome
    type
    object_of_search
    involved_person
  }
  stopAndSearchNoLocationWithoutDate: stopAndSearchNoLocation(
    force: "cleveland"
  ) {
    age_range
    self_defined_ethinicity
    outcome_linked_to_object_of_search
    datetime
    removal_of_more_than_outer_clothing
    operation
    operation_name
    location {
      longitude
      latitude
    }
    gender
    officer_defined_ethnicity
    legislation
    outcome
    type
    object_of_search
    involved_person
  }
  stopAndSearchNoLocationWithDate: stopAndSearchNoLocation(
    force: "cleveland"
    date: "2017-01"
  ) {
    age_range
    self_defined_ethinicity
    outcome_linked_to_object_of_search
    datetime
    removal_of_more_than_outer_clothing
    operation
    operation_name
    location {
      longitude
      latitude
    }
    gender
    officer_defined_ethnicity
    legislation
    outcome
    type
    object_of_search
    involved_person
  }
  stopAndSearchesByLocationIdWithoutDate: stopAndSearchByLocationId(
    locationId: "883407"
  ) {
    age_range
    self_defined_ethinicity
    outcome_linked_to_object_of_search
    datetime
    removal_of_more_than_outer_clothing
    operation
    operation_name
    location {
      longitude
      latitude
    }
    gender
    officer_defined_ethnicity
    legislation
    outcome
    type
    object_of_search
    involved_person
  }
  stopAndSearchesByLocationIdWithDate: stopAndSearchByLocationId(
    locationId: "883407"
    date: "2017-01"
  ) {
    age_range
    self_defined_ethinicity
    outcome_linked_to_object_of_search
    datetime
    removal_of_more_than_outer_clothing
    operation
    operation_name
    location {
      longitude
      latitude
    }
    gender
    officer_defined_ethnicity
    legislation
    outcome
    type
    object_of_search
    involved_person
  }
  singleLocationStopAndSearchesWithoutDate: stopAndSearchByCoords(
    location: $Location
  ) {
    age_range
    self_defined_ethinicity
    outcome_linked_to_object_of_search
    datetime
    removal_of_more_than_outer_clothing
    operation
    operation_name
    location {
      longitude
      latitude
    }
    gender
    officer_defined_ethnicity
    legislation
    outcome
    type
    object_of_search
    involved_person
  }
  multipleLocationStopAndSearchesWithoutDate: stopAndSearchByCoords(
    location: $MultipleLocations
  ) {
    age_range
    self_defined_ethinicity
    outcome_linked_to_object_of_search
    datetime
    removal_of_more_than_outer_clothing
    operation
    operation_name
    location {
      longitude
      latitude
    }
    gender
    officer_defined_ethnicity
    legislation
    outcome
    type
    object_of_search
    involved_person
  }
  singleLocationStopAndSearchesWithDate: stopAndSearchByCoords(
    location: $Location
    date: "2017-01"
  ) {
    age_range
    self_defined_ethinicity
    outcome_linked_to_object_of_search
    datetime
    removal_of_more_than_outer_clothing
    operation
    operation_name
    location {
      longitude
      latitude
    }
    gender
    officer_defined_ethnicity
    legislation
    outcome
    type
    object_of_search
    involved_person
  }
  multipleLocationStopAndSearchesWithDate: stopAndSearchByCoords(
    location: $MultipleLocations
    date: "2017-01"
  ) {
    age_range
    self_defined_ethinicity
    outcome_linked_to_object_of_search
    datetime
    removal_of_more_than_outer_clothing
    operation
    operation_name
    location {
      longitude
      latitude
    }
    gender
    officer_defined_ethnicity
    legislation
    outcome
    type
    object_of_search
    involved_person
  }
  locateNeighbourhood(latitude: 51.500617, longitude: -0.124629) {
    force
    neighbourhood
  }
  neighbourhoodPriorities(force: "leicestershire", neighbourhood: "NC04") {
    action
    issue_date
    action_date
    issue
  }
  neighbourhoodEvents(force: "leicestershire", neighbourhood: "NC04") {
    description
    title
    address
    type
    start_date
    end_date
    contact_details {
      twitter
      email
      telephone
    }
  }
  neighbourhoodBoundary(force: "leicestershire", neighbourhood: "NC04") {
    longitude
    latitude
  }
  neighbourhoodTeam(force: "leicestershire", neighbourhood: "NC04") {
    bio
    contact_details {
      email
    }
    name
    rank
  }
  specificNeighbourhood(force: "leicestershire", neighbourhood: "NC04") {
    url_force
    contact_details {
      twitter
      facebook
      email
      telephone
    }
    name
    links {
      description
      title
      url
    }
    centre {
      latitude
      longitude
    }
    description
    id
    population
    locations {
      name
      longitude
      address
      postcode
      latitude
      type
      description
    }
  }
  neighbourhoods(force: "leicestershire") {
    id
    name
  }
  outcomeForCrime(
    persistentId: "590d68b69228a9ff95b675bb4af591b38de561aa03129dc09a03ef34f537588c"
  ) {
    crime {
      category
      location_type
      location {
        longitude
        latitude
        street {
          id
          name
        }
      }
      context
      persistent_id
      id
      location_subtype
      month
    }
    outcomes {
      date
      person_id
      category {
        name
        code
      }
    }
  }
  crimeCategoriesWithoutDate: crimeCategories {
    name
    url
  }
  crimeCategoriesWithDate: crimeCategories(date: "2011-08") {
    name
    url
  }
  crimeNoLocationWithDate: crimesNoLocation(
    category: "all-crime"
    force: "leicestershire"
    date: "2017-02"
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
    id
    location_subtype
    month
    outcome_status {
      category
      date
    }
  }
  crimeNoLocationWithoutDate: crimesNoLocation(
    category: "all-crime"
    force: "leicestershire"
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
    id
    location_subtype
    month
    outcome_status {
      category
      date
    }
  }
  crimesByLocationIdWithoutDate: crimesAtLocationByLocationId(
    locationId: "883498"
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
    id
    location_subtype
    month
    outcome_status {
      category
      date
    }
  }
  crimesByLocationIdWithDate: crimesAtLocationByLocationId(
    locationId: "883498"
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
    id
    location_subtype
    month
    outcome_status {
      category
      date
    }
  }
  singleLocationCrimesWithoutDate: crimesAtLocationByCoords(
    location: $Location
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
    id
    location_subtype
    month
    outcome_status {
      category
      date
    }
  }
  singleLocationCrimesWithDate: crimesAtLocationByCoords(
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
    id
    location_subtype
    month
    outcome_status {
      category
      date
    }
  }
  outcomesByLocationIdWithoutDate: streetLevelOutcomesByLocationId(
    locationId: "883498"
  ) {
    date
    person_id
    category {
      name
      code
    }
    crime {
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
      id
      location_subtype
      month
    }
  }
  outcomesByLocationIdWithDate: streetLevelOutcomesByLocationId(
    locationId: "883498"
    date: "2017-01"
  ) {
    date
    person_id
    category {
      name
      code
    }
    crime {
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
      id
      location_subtype
      month
    }
  }
  singleLocationOutcomesWithoutDate: streetLevelOutcomesByCoords(
    location: $Location
  ) {
    date
    person_id
    category {
      name
      code
    }
    crime {
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
      id
      location_subtype
      month
    }
  }
  multipleLocationOutcomesWithoutDate: streetLevelOutcomesByCoords(
    location: $MultipleLocations
  ) {
    date
    person_id
    category {
      name
      code
    }
    crime {
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
      id
      location_subtype
      month
    }
  }
  singleLocationOutcomesWithDate: streetLevelOutcomesByCoords(
    location: $Location
    date: "2017-01"
  ) {
    date
    person_id
    category {
      name
      code
    }
    crime {
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
      id
      location_subtype
      month
    }
  }
  multipleLocationOutcomesWithDate: streetLevelOutcomesByCoords(
    location: $MultipleLocations
    date: "2017-01"
  ) {
    date
    person_id
    category {
      name
      code
    }
    crime {
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
      id
      location_subtype
      month
    }
  }
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
