import { NullUndef } from '../types/util'
import { IArticle } from '../generated/graphql'
import { ArticleService as IArticleService } from '../types/dataSources/ArticleService'
import { FireStoreServiceBase } from './BaseService'

export class ArticleService extends FireStoreServiceBase implements IArticleService {
  async get(id: string) {
    return (await this.db.collection('articles').doc(id).get()) as IArticle
  }

  async list(lastKey: NullUndef<string>, limit: NullUndef<number>) {
    let query = this.db.collection('articles').orderBy('updatedAt', 'desc')

    if (lastKey) query = query.startAfter(lastKey)
    if (limit) query = query.limit(limit)

    const snapshot = await query.get()

    const list = snapshot.docs.map((doc) => {
      return doc.data()
    }) as any

    let newLastKey: string | null = null
    if (list.length) newLastKey = list[list.length - 1].updatedAt

    return {
      list,
      lastKey: newLastKey,
    }
  }
}
