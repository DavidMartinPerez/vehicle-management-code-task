import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleEditComponent } from './vehicle-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { VehicleState } from '@store/vehicle/vehicle.state';
import { mockVehicle } from '../../../../../mocks/vehicle.mock';
import { signal } from '@angular/core';
import { selectedVehicle, selectIsLoadingVehicle } from '@store/vehicle/vehicle.selector';

const initialState: VehicleState = {
  isLoading: false,
  selectedVehicle: mockVehicle,
  error: false,
  showToaster: false,
  vehicles: []
};

describe('VehicleEditComponent', () => {
  let component: VehicleEditComponent;
  let fixture: ComponentFixture<VehicleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleEditComponent, RouterTestingModule],
      providers: [provideMockStore({initialState,
        selectors: [
          {selector: selectedVehicle, value: initialState.selectedVehicle},
          {selector: selectIsLoadingVehicle, value: initialState.isLoading},
        ]
      })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
