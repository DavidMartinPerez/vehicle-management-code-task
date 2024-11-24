import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VehicleState } from './vehicle.state';

export const selectVehicleState = createFeatureSelector<VehicleState>('vehicle');

export const selectVehicles = createSelector(
  selectVehicleState,
  (state: VehicleState) => state.vehicles
);

export const selectIsLoadingVehicle = createSelector(
  selectVehicleState,
  (state: VehicleState) => state.isLoading
);

export const selectedVehicle = createSelector(
  selectVehicleState,
  (state: VehicleState) => state.selectedVehicle
);

export const showToaster = createSelector(
  selectVehicleState,
  (state: VehicleState) => state.showToaster
);
