import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticlesState } from 'src/app/store/articles/articles.reducer';
import { RootState } from 'src/app/store/RootState.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  adminMode = false;
  articles = [];
  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.articles = state['articlesReducer'].articles;
      this.adminMode = state['modeReducer'].isAdminMode;
    });
  }
}
