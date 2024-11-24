import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { UserType, UserTypeEnum } from '@core/models/user.model';
import { Store } from '@ngrx/store';
import { Login } from '@store/auth/auth.actions';
import { AuthState } from '@store/auth/auth.state';

@Component({
  selector: 'app-auth',
  imports: [ButtonComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  store = inject<Store<AuthState>>(Store);

  signIn(isAdmin: boolean) {
    this.store.dispatch(Login({userType: isAdmin ? UserTypeEnum.ADMIN : UserTypeEnum.USER}));
  }
}
