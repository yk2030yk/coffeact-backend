import { IResolvers } from '../generated/graphql'

export const articleResolvers: IResolvers = {
  Query: {
    articleList: async (_parent, { lastKey, limit }, { dataSources }) => {
      return await dataSources.articleService.list(lastKey, limit)
    },
  },
}
