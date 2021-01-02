import { gql } from 'apollo-server-cloud-functions'

export const articleTypeDef = gql`
  type Article {
    title: String
    content: String
    eyecatchImage: String
    publishStatus: String
    updatedAt: String
  }

  type ArticleList {
    list: [Article]
    lastKey: String
  }

  type Query {
    articleList(lastKey: String, limit: Int): ArticleList
  }
`
