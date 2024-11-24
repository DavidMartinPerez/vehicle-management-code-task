import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input, input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { UserTypeEnum } from '@core/models/user.model';
import { Vehicle } from '@features/vehicle/models/vehicle.model';
import { Store } from '@ngrx/store';
import { selectUserType } from '@store/auth/auth.selector';
import { map } from 'rxjs';

@Component({
  selector: 'app-vehicle-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.scss'
})
export class VehicleCardComponent {

  store = inject(Store);
  isAdmin = computed(() => this.store.selectSignal(selectUserType)() === UserTypeEnum.ADMIN);

  vehicle = input.required<Vehicle>();
}
