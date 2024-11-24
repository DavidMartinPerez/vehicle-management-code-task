import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/layout/footer/footer/footer.component';
import { HeaderComponent } from './core/layout/header/header/header.component';
import { AuthState } from '@store/auth/auth.state';
import { Store } from '@ngrx/store';
import { Initialize } from '@store/auth/auth.actions';
import { ToasterSuccessfullyComponent } from '@shared/components/toaster-successfully/toaster-successfully.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, ToasterSuccessfullyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  store = inject(Store<{auth: AuthState}>)

  constructor() {
    this.store.dispatch(Initialize());
  }


}
