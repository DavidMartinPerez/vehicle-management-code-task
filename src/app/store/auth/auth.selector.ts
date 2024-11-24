import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUserType = createSelector(
  selectAuthState,
  (state: AuthState) => state.userType
);

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: AuthState) => state.isLoggedIn
);

export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state
);
