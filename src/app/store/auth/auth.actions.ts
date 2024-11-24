import { createAction, props } from '@ngrx/store';
import { UserType } from '@core/models/user.model';

export const Login = createAction(
  '[Auth] Login',
  props<{ userType: UserType, notNavigate?: boolean }>()
);

export const Logout = createAction('[Auth] Logout');

export const Initialize = createAction('[App] Initialize');
