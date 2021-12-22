import { UserState } from './user/user.reducer';
import { ModeState } from './mode/mode.reducer';
import { ArticlesState } from 'src/app/store/articles/articles.reducer';
export interface RootState {
  articlesReducer: ArticlesState;
  modeReducer: ModeState;
  userReducer: UserState;
}
