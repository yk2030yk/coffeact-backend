import { makeExecutableSchema } from 'apollo-server-cloud-functions'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})
