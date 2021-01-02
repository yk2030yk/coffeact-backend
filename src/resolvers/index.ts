import merge from 'lodash/merge'
import { articleResolvers } from './articleResolver'

export const resolvers = merge({}, articleResolvers)
