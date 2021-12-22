import { Article } from '../interfaces/Article.interface';
import { ArticlesService } from '../services/articles.service';
import { RootState } from 'src/app/store/RootState.interface';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

type canActivateReturn =
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>;

@Injectable({
  providedIn: 'root',
})
export class ArticlesActivateGuard implements CanActivate {
  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): canActivateReturn {
    return this.articlesService.getOneArticle(route.params['id']).pipe(
      map((res: Article) => {
        if (res?.title) {
          return true;
        }
        return this.router.createUrlTree(['/home']);
      })
    );
  }
}
