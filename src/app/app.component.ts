import { Store } from '@ngrx/store';
import { RootState } from './store/RootState.interface';
import { ArticlesService } from './shared/services/articles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAdminMode: boolean = false;
  constructor(
    private articlesService: ArticlesService,
    private store: Store<RootState>
  ) {}
  ngOnInit(): void {
    this.articlesService.getAllArticles();
    this.store.subscribe((state) => {
      this.isAdminMode = state.modeReducer.isAdminMode;
    });
  }
}
