import { NullUndef } from '../util'
import { IArticle, IArticleList } from '../../generated/graphql'

export interface ArticleService {
  get: (id: string) => Promise<IArticle>
  list: (lastKey: NullUndef<string>, limit: NullUndef<number>) => Promise<IArticleList>
}
