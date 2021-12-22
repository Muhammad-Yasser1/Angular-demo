import { USER_LOGIN, USER_LOGOUT } from './user.actions';
import { createReducer, on } from '@ngrx/store';

export interface UserState {
  user: object;
}

const initialState: UserState = {
  user: {},
};
export const userReducer = createReducer<UserState>(
  initialState,
  on(USER_LOGIN, (state = initialState): UserState => {
    return { ...state };
  }),
  on(USER_LOGOUT, (state = initialState): UserState => {
    return { ...state };
  })
);
