import { Article as ArticleInterface } from './../interfaces/Article.interface';
import { format } from 'date-fns';
export class ArticleModel implements ArticleInterface {
  created_at: string;
  updated_at: string;

  constructor(
    public title: string,
    public content: string,
    public author: string,
    public image: string,
    public editing: boolean
  ) {
    if (!this.editing) {
      // this means it is a new article
      this.created_at = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }
    this.updated_at = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  }
}
