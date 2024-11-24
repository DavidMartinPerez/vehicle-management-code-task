// src/app/effects/auth.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Login, Logout, Initialize } from './auth.actions';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LOCAL_STORAGE } from '@core/services/local-storage/local-storage.enum';


@Injectable()
export class AuthEffects {

  actions$ = inject(Actions);
  localStorageService = inject(LocalStorageService);
  router = inject(Router)
  activedRouter = inject(ActivatedRoute)

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(Login),
        tap((action) => {
          this.localStorageService.setDataByKey(LOCAL_STORAGE.USER_TYPE, action.userType);
          if(!action.notNavigate) {
            this.router.navigate(['vehicle']);
          }
        })
      ),
    { dispatch: false }
  );


  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(Logout),
        tap(() => {
          this.localStorageService.removeDataByKey(LOCAL_STORAGE.USER_TYPE);
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );


  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Initialize),
      map(() => {
        const userType = this.localStorageService.getByKey(LOCAL_STORAGE.USER_TYPE);
        if (userType) {
          return Login({ userType, notNavigate: true });
        }
        return { type: '[App] No User' };
      })
    )
  );
}
