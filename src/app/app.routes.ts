import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@core/auth/auth.routes').then(m => m.AUTH_ROUTES),
    canActivate: []
  }, {
    path: 'vehicle',
    loadChildren: () => import('@features/vehicle/vehicle.routes').then(m => m.VEHICLE_ROUTES),
    canActivate: [authGuard]
  }
];
