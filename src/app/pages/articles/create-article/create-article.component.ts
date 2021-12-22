import { ArticleModel } from './../../../shared/models/Article.model';
import { Router } from '@angular/router';
import { take, catchError } from 'rxjs/operators';
import { Article } from './../../../shared/interfaces/Article.interface';
import { Store } from '@ngrx/store';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { format } from 'date-fns';
import * as articleActions from 'src/app/store/articles/articles.actions';
import { throwError } from 'rxjs';
import { RootState } from 'src/app/store/RootState.interface';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  mouseOverCreateButton: boolean = false;
  @ViewChild('createArticleForm', { static: true }) form: NgForm;
  constructor(
    private http: HttpClient,
    private store: Store<RootState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.form);
  }
  createArticle(createArticleForm: NgForm) {
    if (createArticleForm.valid) {
      const newArticle: Article = new ArticleModel(
        createArticleForm.value.title,
        createArticleForm.value.content,
        createArticleForm.value.author,
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
            articleActions.CREATE_ARTICLE({
              article: { ...newArticle, id: newArticleIdObj.id },
            })
          );
          this.router.navigate(['/home']);
        });
    }
  }
  handleCancel() {
    this.router.navigate(['/']);
  }
}
