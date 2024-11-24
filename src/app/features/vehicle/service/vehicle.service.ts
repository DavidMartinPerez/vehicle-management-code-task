import { inject, Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { mockVehicles } from '../../../../mocks/vehicle.mock';
import { delay, finalize, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { errorLoadingVehicles, loadingVehicles, setNewVehicle, setSelectedVehicle, setVehicles, showToaster } from '@store/vehicle/vehicle.actions';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { LOCAL_STORAGE } from '@core/services/local-storage/local-storage.enum';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private readonly store = inject<Store<Vehicle>>(Store)
  private readonly localStorage = inject(LocalStorageService)
  location = inject(Location);



  getAllVehicle(modelName?: string) {
    this.store.dispatch(loadingVehicles());

    const vehicles: Vehicle[] = this.getAllVehicleByLocalStorage();

    of(vehicles).pipe(
      delay(1000)
    ).subscribe({
      next: (vehicles) => {
        //set vehicle on state
        if(modelName) {
          vehicles = vehicles.filter((vehicle) =>
            vehicle.modelName.toLowerCase()
                  .includes(modelName.toLowerCase())
          )
        }
        this.store.dispatch(setVehicles({vehicles}))
      },
      error: (error) => {
        this.store.dispatch(errorLoadingVehicles({error}))
      }
    })
  }

  getVehicleById(id: number) {
    const vehicle = this.getAllVehicleByLocalStorage().filter(vehicle => vehicle.id === id)[0];

    this.store.dispatch(loadingVehicles());
    of(vehicle).pipe(
      delay(500)
    ).subscribe({
      next: (vehicle) => {
        //set vehicle on state
        this.store.dispatch(setSelectedVehicle({vehicle}))
      },
      error: (error) => {
        this.store.dispatch(errorLoadingVehicles({error}))
      }
    })
  }

  saveVehicle(vehicle: Vehicle) {

    this.setNewVehiclesOnLocalStorage(vehicle);

    of(vehicle).pipe(
      delay(500)
    ).subscribe({
      next: (vehicle) => {
        //set vehicle on state
        this.store.dispatch(setNewVehicle({vehicle}));
        this.store.dispatch(showToaster());
        this.location.back();
      },
      error: (error) => {
        this.store.dispatch(errorLoadingVehicles({error}))
      }
    })
  }


  private getAllVehicleByLocalStorage(): Vehicle[] {
    const vehicles = this.localStorage.getByKey(LOCAL_STORAGE.VEHICLES);

    //If not exist with load by mock
    if(!vehicles) {
      this.localStorage.setDataByKey(LOCAL_STORAGE.VEHICLES, mockVehicles);
      return mockVehicles;
    }

    return vehicles ?? [];
  }

  private setNewVehiclesOnLocalStorage(newVehicle: Vehicle) {
    const vehicles = this.getAllVehicleByLocalStorage();

    if(!newVehicle.id) {
      newVehicle.id = vehicles.length + 1;

      const newVehicles: Vehicle[] = [...vehicles, newVehicle];

      this.localStorage.setDataByKey(LOCAL_STORAGE.VEHICLES, newVehicles);
    } else {

      const newVehicles = vehicles.map((vehicle) => {
          if(vehicle.id === newVehicle.id) {
            return newVehicle
          }
          return vehicle
      })

      this.localStorage.setDataByKey(LOCAL_STORAGE.VEHICLES, newVehicles);

    }
  }
}
