import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { VehicleDetailSkeletonComponent } from '@features/vehicle/components/vehicle-detail-skeleton/vehicle-detail-skeleton.component';
import { VehicleService } from '@features/vehicle/service/vehicle.service';
import { Store } from '@ngrx/store';
import { ArrowBackComponent } from '@shared/components/arrow-back/arrow-back.component';
import { ButtonLinkComponent } from '@shared/components/button-link/button-link.component';
import { selectedVehicle, selectIsLoadingVehicle } from '@store/vehicle/vehicle.selector';

@Component({
  selector: 'app-vehicle-detail',
  imports: [ButtonLinkComponent, RouterModule, CommonModule, ArrowBackComponent, VehicleDetailSkeletonComponent],
  templateUrl: './vehicle-detail.component.html',
  styleUrl: './vehicle-detail.component.scss'
})
export class VehicleDetailComponent {

  activetedRoute = inject(ActivatedRoute)
  vehicleService = inject(VehicleService)
  store = inject(Store)

  vehicle = this.store.selectSignal(selectedVehicle)
  isLoading = this.store.selectSignal(selectIsLoadingVehicle)


  constructor() {
    this.activetedRoute.params.subscribe( params => {
      const id = params['id'];

      this.vehicleService.getVehicleById(+id)
    })
  }



}
