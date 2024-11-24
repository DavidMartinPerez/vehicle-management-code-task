import { UserType } from "@core/models/user.model";
import { Vehicle } from "@features/vehicle/models/vehicle.model";

export interface VehicleState {
  vehicles: Vehicle[],
  selectedVehicle: Vehicle | null,
  isLoading: boolean;
  error: any;
  showToaster: boolean;
}

export const initialVehicleState: VehicleState = {
  vehicles: [],
  selectedVehicle: null,
  isLoading: false,
  error: null,
  showToaster: false
};
