import { createReducer, on } from '@ngrx/store';
import { Login, Logout } from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,
  on(Login, (state, { userType }) => ({
    ...state,
    userType,
    isLoggedIn: true
  })),
  on(Logout, (state) => ({
    ...state,
    user: null,
    isLoggedIn: false
  }))
);
