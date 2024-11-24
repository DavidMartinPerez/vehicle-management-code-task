import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { VehicleCardComponent } from './vehicle-card.component';
import { UserTypeEnum } from '@core/models/user.model';
import { selectUserType } from '@store/auth/auth.selector';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Vehicle } from '@features/vehicle/models/vehicle.model';
import { RouterModule } from '@angular/router';
import { signal } from '@angular/core';

const mockVehicle: Vehicle = {
  id: 1,
  modelName: 'Tesla Model S',
  picture: 'img',
  type: 'car',
  color: 'Red',
  maxSpeed: 250,
  registrationDate: '2023-01-01',
  specificData: {
    fuelType: 'electric',
    hasAirbag: true,
  },
};

describe('VehicleCardComponent', () => {
  let component: VehicleCardComponent;
  let fixture: ComponentFixture<VehicleCardComponent>;
  let store: Store;

  const initialState = {
    auth: {
      userType: UserTypeEnum.ADMIN
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleCardComponent],
      imports: [RouterModule, StoreModule.forRoot({})],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(VehicleCardComponent);
    component = fixture.componentInstance;
    // component.vehicle = mockVehicle;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly compute isAdmin based on store', () => {
    component.isAdmin()
  });

  it('should display vehicle information', () => {
    const vehicleName = fixture.nativeElement.querySelector('.vehicle-name'); // Suponiendo que hay una clase para el nombre del vehículo
    expect(vehicleName.textContent).toContain(mockVehicle.modelName);
  });

  it('should display correct vehicle type', () => {
    const vehicleType = fixture.nativeElement.querySelector('.vehicle-type'); // Suponiendo que hay una clase para el tipo del vehículo
    expect(vehicleType.textContent).toContain(mockVehicle.type);
  });

  it('should display correct vehicle color', () => {
    const vehicleColor = fixture.nativeElement.querySelector('.vehicle-color'); // Suponiendo que hay una clase para el color del vehículo
    expect(vehicleColor.textContent).toContain(mockVehicle.color);
  });

  // Si tienes un botón o componente que depende de `isAdmin`, puedes probar si está visible o no
  it('should show admin-only content when isAdmin is true', () => {
    const adminContent = fixture.nativeElement.querySelector('.admin-content'); // Suponiendo que hay una clase para el contenido solo admin
    expect(adminContent).toBeTruthy();
  });
});
