import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { ADMIN_MODE, READER_MODE } from './mode.actions';

export interface ModeState {
  isAdminMode: boolean;
}

const initialState: ModeState = {
  isAdminMode: false,
};

export const modeFeature = createFeatureSelector<ModeState>('mode');
export const isAdminMode = createSelector(
  modeFeature,
  (state) => state.isAdminMode
);

export const modeReducer = createReducer<ModeState>(
  initialState,
  on(ADMIN_MODE, (state): ModeState => {
    return { ...state, isAdminMode: true };
  }),
  on(READER_MODE, (state): ModeState => {
    return { ...state, isAdminMode: false };
  })
);
