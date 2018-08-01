const express = require('express');
const graphqlHTTP = require('express-graphql');
const PORT = 8000;
const { importSchema } = require('graphql-import');
const { buildSchema } = require('graphql');
const createSchema = location => buildSchema(importSchema(location));
const schema = createSchema('graphql/schema.graphql');

// root resolver
const rootValue = require('./resolver');

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

// Host docs
app.use('/docs', express.static('docs'));

app.listen(PORT, () => {
  console.log(`GraphQL running on port: ${PORT}`);
});
