import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { AuthEffects } from '@store/auth/auth.effects';
import { authReducer } from '@store/auth/auth.reducer';
import { vehicleReducer } from '@store/vehicle/vehicle.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEffects([AuthEffects]),
    provideStore({ auth: authReducer, vehicle: vehicleReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
