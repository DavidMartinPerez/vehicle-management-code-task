import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailComponent } from './vehicle-detail.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { mockVehicle } from '../../../../../mocks/vehicle.mock';
import { VehicleState } from '@store/vehicle/vehicle.state';
import { signal } from '@angular/core';

const initialState: VehicleState = {
  isLoading: false,
  selectedVehicle: mockVehicle,
  error: false,
  showToaster: false,
  vehicles: []
};

describe('VehicleDetailComponent', () => {
  let component: VehicleDetailComponent;
  let fixture: ComponentFixture<VehicleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleDetailComponent, RouterTestingModule],
      providers: [provideMockStore({initialState})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailComponent);
    component = fixture.componentInstance;
    component.isLoading = signal(false)
    component.vehicle = signal(initialState.selectedVehicle)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
