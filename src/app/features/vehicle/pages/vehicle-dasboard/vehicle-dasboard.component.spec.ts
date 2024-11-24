import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDasboardComponent } from './vehicle-dasboard.component';
import { provideMockStore } from '@ngrx/store/testing';
import { VehicleState } from '@store/vehicle/vehicle.state';
import { mockVehicle, mockVehicles } from '../../../../../mocks/vehicle.mock';
import { computed, signal } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { UserTypeEnum } from '@core/models/user.model';
import { selectUserType } from '@store/auth/auth.selector';
import { selectIsLoadingVehicle } from '@store/vehicle/vehicle.selector';

const initialState = {
  isLoading: false,
  selectedVehicle: mockVehicle,
  error: false,
  showToaster: false,
  vehicles: mockVehicles
};

describe('VehicleDasboardComponent', () => {
  let component: VehicleDasboardComponent;
  let fixture: ComponentFixture<VehicleDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleDasboardComponent, RouterTestingModule],
      providers: [provideMockStore({
        initialState,
        selectors: [
          { selector: selectUserType, value: UserTypeEnum.ADMIN },
          { selector: selectIsLoadingVehicle, value: false }
        ]
      })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDasboardComponent);
    component = fixture.componentInstance;
    component.vehicles = signal(initialState.vehicles)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
