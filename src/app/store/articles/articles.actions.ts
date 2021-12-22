import { Article } from './../../shared/interfaces/Article.interface';
import { createAction, props } from '@ngrx/store';

export const GET_ARTICLES = createAction(
  'GET_ARTICLES',
  props<{ articles: Article[] }>()
);
export const CREATE_ARTICLE = createAction(
  'CREATE_ARTICLE',
  props<{ article: Article }>()
);
export const UPDATE_ARTICLE = createAction('UPDATE_ARTICLE');
export const DELETE_ARTICLE = createAction('DELETE_ARTICLE');
