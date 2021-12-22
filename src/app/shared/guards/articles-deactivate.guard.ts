import { EditArticleComponent } from './../../pages/articles/edit-article/edit-article.component';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CreateArticleComponent } from './../../pages/articles/create-article/create-article.component';
import { Observable } from 'rxjs';

/* the function version of this guard */
// export const articlesDeactivateGuard = (component: CreateArticleComponent | EditArticleComponent) => {
//   if (component.form.dirty) {
//     const confirmResult = confirm(
//       'you may have unsaved inputs, are u sure your want to leave this page?'
//     );
//     return confirmResult;
//   }
// };

@Injectable({
  providedIn: 'root',
})
export class ArticlesDeactivateGuard
  implements CanDeactivate<CreateArticleComponent | EditArticleComponent>
{
  canDeactivate(
    component: CreateArticleComponent | EditArticleComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log(component, currentRoute, currentState, nextState);

    if (component.form.dirty) {
      const confirmResult = confirm(
        'you may have unsaved inputs, are u sure your want to leave this page?'
      );
      return confirmResult;
    }
    return true;
  }
}
