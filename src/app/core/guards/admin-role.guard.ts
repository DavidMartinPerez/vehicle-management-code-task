import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserTypeEnum } from '@core/models/user.model';
import { Store } from '@ngrx/store';
import { selectUserType } from '@store/auth/auth.selector';
import { AuthState } from '@store/auth/auth.state';
import { map, tap } from 'rxjs';


export const adminRoleGuard: CanActivateFn = () => {
  const store = inject(Store<{ auth: AuthState; }>);
  const router = inject(Router);


  return store.select(selectUserType).pipe(
    tap((userType) => {
      if (userType !== UserTypeEnum.ADMIN) router.navigate(['/vehicle']);
    }),
    map(userType => userType === UserTypeEnum.ADMIN)
  );
}
