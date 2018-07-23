const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const PORT = 8000;

// root resolver
const rootValue = require('./resolver');

const app = express();
app.use(
  '/',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`GraphQL running on port: ${PORT}`);
});
