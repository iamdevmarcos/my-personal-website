import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: process.env.HYGRAPH_API_HOST,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`
  }
})