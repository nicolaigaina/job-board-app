import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors || networkError) {
    graphqlErrors.map((message, location, path) => {
      console.log(`Error connecting to graphql in client ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "/graphql" })]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const GraphqlProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphqlProvider;
