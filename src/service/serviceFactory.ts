import { ArticleService } from './articleService'

export const serviceFactory = () => {
  return {
    articleService: new ArticleService(),
  }
}
