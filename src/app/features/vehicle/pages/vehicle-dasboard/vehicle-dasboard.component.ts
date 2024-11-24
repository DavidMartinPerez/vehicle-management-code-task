import { Component, computed, effect, inject } from '@angular/core';
import { VehicleService } from '@features/vehicle/service/vehicle.service';
import { SearchComponent } from '@shared/components/search/search.component';
import { CommonModule } from '@angular/common';
import { VehicleCardComponent } from '@features/vehicle/components/vehicle-card/vehicle-card.component';
import { Store } from '@ngrx/store';
import { selectIsLoadingVehicle, selectVehicles } from '@store/vehicle/vehicle.selector';
import { VehicleCardSkeletonComponent } from '@features/vehicle/components/vehicle-card-skeleton/vehicle-card-skeleton.component';
import { ButtonLinkComponent } from '@shared/components/button-link/button-link.component';
import { selectUserType } from '@store/auth/auth.selector';
import { UserTypeEnum } from '@core/models/user.model';

@Component({
  selector: 'app-vehicle-dasboard',
  imports: [SearchComponent, ButtonLinkComponent, CommonModule, VehicleCardComponent, VehicleCardSkeletonComponent],
  templateUrl: './vehicle-dasboard.component.html',
  styleUrl: './vehicle-dasboard.component.scss'
})
export class VehicleDasboardComponent {

  vehicleService = inject(VehicleService);
  store = inject(Store);
  vehicles = this.store.selectSignal(selectVehicles)
  isLoadingVehicle = this.store.selectSignal(selectIsLoadingVehicle);
  isAdmin = computed(() => this.store.selectSignal(selectUserType)() === UserTypeEnum.ADMIN);

  constructor() {
    this.vehicleService.getAllVehicle();
  }

  search(modelName: string) {
    this.vehicleService.getAllVehicle(modelName);
  }

}
