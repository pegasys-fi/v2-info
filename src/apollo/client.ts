import { ApolloClient, InMemoryCache } from '@apollo/client'

export const healthClient = new ApolloClient({
  uri: 'https://api.thegraph.com/index-node/graphql',
  cache: new InMemoryCache(),
})
// url to testnet : http://13.59.22.26/subgraphs/name/pollum-io/pegasys-v2
// url to mainnet: https://rollux.graph.pegasys.fi/subgraphs/name/pollum-io/pegasys-v3

// url to testnet : http://13.59.22.26/subgraphs/name/pollum-io/syscoin-blocks
// url to mainnet: https://rollux.graph.pegasys.fi/subgraphs/name/pollum-io/syscoin-blocks
export const blockClient = new ApolloClient({
  uri: 'https://rollux.graph.pegasys.fi/subgraphs/name/pollum-io/syscoin-blocks',
  cache: new InMemoryCache(),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})

export const client = new ApolloClient({
  uri: 'https://rollux.graph.pegasys.fi/subgraphs/name/pollum-io/pegasys-v3',
  cache: new InMemoryCache({
    typePolicies: {
      Token: {
        // Singleton types that have no identifying field can use an empty
        // array for their keyFields.
        keyFields: false,
      },
      Pool: {
        // Singleton types that have no identifying field can use an empty
        // array for their keyFields.
        keyFields: false,
      },
    },
  }),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})
