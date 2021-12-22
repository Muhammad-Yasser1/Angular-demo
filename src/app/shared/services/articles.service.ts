import { Router, ActivatedRoute } from '@angular/router';
import { ArticleModel } from './../models/Article.model';
import { NgForm } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootState } from 'src/app/store/RootState.interface';
import { Article } from '../interfaces/Article.interface';
import { throwError } from 'rxjs';
import * as articlesActions from '../../store/articles/articles.actions';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  articles: Article[];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private store: Store<RootState>,
    private router: Router
  ) {}

  getAllArticles() {
    return this.http
      .get(`${environment.apiUrl}/articles.json`)
      .pipe(
        map((articles) => {
          const updatedArticles: Article[] = [];
          for (const key in articles) {
            if (Object.prototype.hasOwnProperty.call(articles, key)) {
              const article = articles[key];
              updatedArticles.push({ ...article, id: key });
            }
          }
          this.articles = updatedArticles;
          return updatedArticles;
        }),
        catchError((errorRes: HttpErrorResponse) => {
          return throwError(() => new Error(errorRes.message));
        })
      )
      .subscribe((articles: Article[]) => {
        this.store.dispatch(articlesActions.GET_ARTICLES({ articles }));
      });
  }
  getOneArticle(id = this.route.snapshot.params['id']) {
    return this.http.get(`${environment.apiUrl}/articles/${id}.json`);
  }
  createArticle(form: NgForm) {
    if (form.valid) {
      const newArticle: Article = new ArticleModel(
        form.value.title,
        form.value.content,
        form.value.author,
        'asset 1.jpeg',
        false
      );

      this.http
        .post(`${environment.apiUrl}/articles.json`, newArticle)
        .pipe(
          catchError((errorRes: HttpErrorResponse) =>
            throwError(() => errorRes.message)
          )
        )
        .subscribe((newArticleIdObj: { id: string }) => {
          this.store.dispatch(
            articlesActions.CREATE_ARTICLE({
              article: { ...newArticle, id: newArticleIdObj.id },
            })
          );
          this.router.navigate(['/home']);
        });
    }
  }
  editArticle(form) {
    this.http
      .put(
        `${environment.apiUrl}/articles/${this.route.snapshot.params['id']}.json`,
        { ...form.value }
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  deleteArticle() {
    this.http
      .delete(
        `${environment.apiUrl}/articles/${this.route.snapshot.params['id']}.json`
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
