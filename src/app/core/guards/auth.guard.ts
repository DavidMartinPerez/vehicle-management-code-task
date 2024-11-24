import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { LocalStorageService } from "@core/services/local-storage/local-storage.service";
import { Store } from "@ngrx/store";
import { selectIsLoggedIn } from "@store/auth/auth.selector";
import { AuthState } from "@store/auth/auth.state";
import { catchError, map, tap } from "rxjs";

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const store = inject(Store<{auth: AuthState}>);
  const router = inject(Router)


  return store.select(selectIsLoggedIn).pipe(
    tap((isLog) => {
        if(!isLog) router.navigate(['/']);
      })
  )
};
