import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { VehicleCardComponent } from './vehicle-card.component';
import { UserTypeEnum } from '@core/models/user.model';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterModule } from '@angular/router';
import { ComponentRef, signal } from '@angular/core';
import { mockVehicle } from '../../../../../mocks/vehicle.mock';
import { RouterTestingModule } from '@angular/router/testing';

describe('VehicleCardComponent', () => {
  let component: VehicleCardComponent;
  let fixture: ComponentFixture<VehicleCardComponent>;
  let store: Store;
  let componentRef: ComponentRef<VehicleCardComponent>

  const initialState = {
    auth: {
      userType: UserTypeEnum.ADMIN
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleCardComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef
    componentRef.setInput('vehicle', mockVehicle);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly compute isAdmin based on store', () => {
    component.isAdmin()
  });
});
