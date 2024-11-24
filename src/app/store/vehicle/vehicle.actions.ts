// src/app/actions/auth.actions.ts
import { Vehicle } from '@features/vehicle/models/vehicle.model';
import { createAction, props } from '@ngrx/store';

export const loadingVehicles = createAction(
  '[Vehicle] Loading have started to load',
);

export const setVehicles = createAction('[Vehicle] Vehicles stored in state', props<{vehicles: Vehicle[]}>());

export const setNewVehicle = createAction('[Vehicle] Create new vehicle', props<{vehicle: Vehicle}>());

export const setSelectedVehicle = createAction('[Vehicle] Vehicle selected stored in state', props<{vehicle: Vehicle}>());

export const errorLoadingVehicles = createAction('[Vehicle] Vehicle loading has failed', props<{error: any}>());

export const showToaster = createAction('[Vehicle] Show Toaster');
export const hideToaster = createAction('[Vehicle] Hide Toaster');
