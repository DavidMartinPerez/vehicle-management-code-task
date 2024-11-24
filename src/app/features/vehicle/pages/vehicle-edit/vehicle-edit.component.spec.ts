import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleEditComponent } from './vehicle-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { VehicleState } from '@store/vehicle/vehicle.state';
import { mockVehicle } from '../../../../../mocks/vehicle.mock';
import { signal } from '@angular/core';
import { selectedVehicle, selectIsLoadingVehicle } from '@store/vehicle/vehicle.selector';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { VehicleService } from '@features/vehicle/service/vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

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
  let mockStore: MockStore;
  let mockVehicleService: jasmine.SpyObj<VehicleService>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;
  let dispatchSpy: jasmine.Spy;


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

    mockStore = TestBed.inject(MockStore);
    dispatchSpy = spyOn(mockStore, 'dispatch');

    mockVehicleService = jasmine.createSpyObj('VehicleService', ['saveVehicle', 'getVehicleById']);
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['params']);

    // mockActivatedRoute.params.subscribe.and.callFake((callback: Function) => callback({ id: '1' }));

    fixture = TestBed.createComponent(VehicleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should load the vehicle data into the form when editing a vehicle', () => {
    // Simulamos la carga de un vehículo
    mockVehicleService.getVehicleById.and.returnValue();

    // Cambiamos el id para simular que estamos editando un vehículo
    component.ngOnInit();

    // Verificamos que los valores del formulario se hayan llenado correctamente
    fixture.detectChanges(); // Detecta los cambios

    expect(component.form.value.modelName).toBe('Tesla Model S');
    expect(component.form.value.maxSpeed).toBe('250');
    expect(component.form.value.color).toBe('red');
    expect(component.form.value.type).toBe('car');
    expect(component.form.value.hasAirbag).toBe('true');
  });

  xit('should call saveVehicle on submit', () => {
    // Configuramos el formulario con datos válidos
    component.form.setValue({
      modelName: 'Tesla Model X',
      maxSpeed: '260',
      color: 'blue',
      registrationDate: '2023-05-10',
      type: 'car',
      hasAirbag: 'true',
      fuelType: 'electric',
      maxWeightSupported: '',
      canAttachTrailer: '',
      picture: 'img.jpg'
    });

    // Simulamos el submit
    component.submit();

    // Verificamos que la función de guardar vehículo haya sido llamada
    expect(mockVehicleService.saveVehicle).toHaveBeenCalled();
  });

  it('should show loading spinner when isLoading is true', () => {
    component.isLoading = signal(true);
    fixture.detectChanges();

    const spinnerElement = fixture.debugElement.query(By.css('.animate-spin'));
    expect(spinnerElement).toBeTruthy();
  });

  it('should not show the airbag input based on vehicle type truck', () => {
    component.form.get('type')?.setValue('truck');
    fixture.detectChanges();

    const airbagInput = fixture.debugElement.query(By.css('select[formControlName="hasAirbag"]'));
    expect(airbagInput).toBeFalsy();
  });
});
