import "styling/semantic.less";

import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Home } from "./pages";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql"
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default App;
