import { ApolloServer } from 'apollo-server-cloud-functions'
import * as functions from 'firebase-functions'

import { schema } from './schema'
import { serviceFactory } from './service/serviceFactory'

const server = new ApolloServer({
  schema,
  dataSources: serviceFactory,
})

exports.graphql = functions.https.onRequest(server.createHandler())
