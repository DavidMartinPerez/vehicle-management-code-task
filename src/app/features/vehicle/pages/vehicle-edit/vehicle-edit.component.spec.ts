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

    fixture = TestBed.createComponent(VehicleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click on submit', () => {
    const spyOnSubmit = spyOn(component, 'submit')
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

    const submitButton = fixture.debugElement.query(By.css('app-button'));

    submitButton.triggerEventHandler('onClick', null);

    expect(spyOnSubmit).toHaveBeenCalled();
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
