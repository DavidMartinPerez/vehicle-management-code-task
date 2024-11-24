import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UserType } from '@core/models/user.model';
import { Store } from '@ngrx/store';
import { ButtonComponent } from '@shared/components/button/button.component';
import { Logout } from '@store/auth/auth.actions';
import { selectAuth, selectIsLoggedIn, selectUserType } from '@store/auth/auth.selector';
import { AuthState } from '@store/auth/auth.state';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  store = inject(Store<{auth: AuthState}>)
  authState$: Observable<AuthState> = this.store.select(selectAuth);

  logout() {
    this.store.dispatch(Logout());
  }
}
