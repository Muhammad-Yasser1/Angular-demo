import { Article } from './../../shared/interfaces/Article.interface';
import {
  createFeature,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import {
  GET_ARTICLES,
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
} from './articles.actions';

export interface ArticlesState {
  articles: Article[];
}

const initialState: ArticlesState = {
  articles: [],
};
export const articlesFeature = createFeatureSelector<ArticlesState>('articles');
export const allArticles = createSelector(
  articlesFeature,
  (state) => state.articles
);

export const articlesReducer = createReducer<ArticlesState>(
  initialState,
  on(GET_ARTICLES, (state, action): ArticlesState => {
    return { ...state, articles: [...action.articles] };
  }),
  on(CREATE_ARTICLE, (state, action): ArticlesState => {
    return { ...state, articles: [...state.articles, action.article] };
  }),
  on(UPDATE_ARTICLE, (state): ArticlesState => {
    return {
      ...state /*{
      ...state,
      articles: state.articles.map((article) => {
        if (article.id === +action.id) {
          return action;
        }
        return article;
      }),
    }*/,
    };
  }),
  on(DELETE_ARTICLE, (state): ArticlesState => {
    return {
      ...state /*{
      ...state,
      articles: state.articles.filter((article) => {
        return article.id !== +action.id;
      }),
    }*/,
    };
  })
);
