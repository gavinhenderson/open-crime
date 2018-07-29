const { importSchema } = require("graphql-import");
const schema = importSchema("graphql/schema.graphql");
const fs = require("fs");
fs.writeFileSync("schema.graphql", schema);
console.log("New schema exported to 'schema.graphql'");
