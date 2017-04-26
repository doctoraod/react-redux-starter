import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import App from './App'
import store from './store'
import './index.css'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:5000/graphql' }),
})

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)
