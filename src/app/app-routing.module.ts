import { ArticlesActivateGuard } from './shared/guards/articles-activate.guard';
import { EditArticleComponent } from './pages/articles/edit-article/edit-article.component';
import { ArticleDetailsComponent } from './pages/articles/article-details/article-details.component';
import { CreateArticleComponent } from './pages/articles/create-article/create-article.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ArticlesDeactivateGuard } from './shared/guards/articles-deactivate.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'articles/create',
    component: CreateArticleComponent,
    canDeactivate: [ArticlesDeactivateGuard],
  },
  {
    path: 'articles/:id/edit',
    component: EditArticleComponent,
    canActivate: [ArticlesActivateGuard],
    canDeactivate: [ArticlesDeactivateGuard],
  },
  {
    path: 'articles/:id',
    component: ArticleDetailsComponent,
    canActivate: [ArticlesActivateGuard],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
