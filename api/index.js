const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const PORT = 8000;

const schema = buildSchema(
  `type Query {
    hello: String
  }`
);

const rootValue = {
  hello: () => 'World'
};

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
