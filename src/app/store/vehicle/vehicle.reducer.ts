import { createReducer, on } from '@ngrx/store';
import { errorLoadingVehicles, hideToaster, loadingVehicles, setNewVehicle, setSelectedVehicle, setVehicles, showToaster } from './vehicle.actions';
import { initialVehicleState } from './vehicle.state';

export const vehicleReducer = createReducer(
  initialVehicleState,
  on(loadingVehicles, (state) => ({
    ...state,
    vehicles: [],
    isLoading: true,
    error: null,
    selectedVehicle: null
  })),
  on(setVehicles, (state, { vehicles }) => ({
    ...state,
    vehicles,
    isLoading: false,
    error: null,
    selectedVehicle: null
  })),
  on(setNewVehicle,(state, { vehicle }) => ({
    ...state,
    vehicles: [...state.vehicles, vehicle],
    isLoading: false,
    error: null
  })),
  on(setSelectedVehicle, (state, {vehicle}) => ({
    ...state,
    vehicles: [],
    isLoading: false,
    selectedVehicle: vehicle
  })),
  on(errorLoadingVehicles, (state, {error}) => ({
    ...state,
    vehicles: [],
    isLoading: false,
    error,
    selectedVehicle: null
  })),
  on(hideToaster, (state) => ({
    ...state,
    showToaster: false
  })),
  on(showToaster, (state) => ({
    ...state,
    showToaster: true
  }))
);
