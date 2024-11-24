import { UserType } from "@core/models/user.model";

export interface AuthState {
  userType: UserType;
  isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
  userType: null,
  isLoggedIn: false
};
