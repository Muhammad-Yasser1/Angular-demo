import { Store } from '@ngrx/store';
import { Article } from './../../../shared/interfaces/Article.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  article: Article;
  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.article = state['articlesReducer'].articles.find(
        (article) => article.id === this.route.snapshot.params['id']
      );
    });
  }
}
