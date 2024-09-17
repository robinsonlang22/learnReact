import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import React from 'react'

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
        <div>
            <h1>Hello World</h1>
        </div>
    </ApolloProvider>
  )
}
