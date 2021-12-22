import { RootState } from './store/RootState.interface';
import { userReducer } from './store/user/user.reducer';
import { articlesReducer } from './store/articles/articles.reducer';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EditArticleComponent } from './pages/articles/edit-article/edit-article.component';
import { CreateArticleComponent } from './pages/articles/create-article/create-article.component';
import { ArticleDetailsComponent } from './pages/articles/article-details/article-details.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { modeReducer } from './store/mode/mode.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditArticleComponent,
    CreateArticleComponent,
    ArticleDetailsComponent,
    AuthComponent,
    NavbarComponent,
    ModalComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot<RootState>(
      { articlesReducer, modeReducer, userReducer },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
