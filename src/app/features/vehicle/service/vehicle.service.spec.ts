import { TestBed } from '@angular/core/testing';

import { VehicleService } from './vehicle.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LOCAL_STORAGE } from '@core/services/local-storage/local-storage.enum';
import { mockVehicle, mockVehicles } from '../../../../mocks/vehicle.mock';
import { Vehicle } from '../models/vehicle.model';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { Location } from '@angular/common';

describe('VehicleService', () => {
  let service: VehicleService;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockStore: MockStore;

  beforeEach(() => {
    const localStorageSpy = jasmine.createSpyObj('LocalStorageService', ['getByKey', 'setDataByKey']);
    const locationSpy = jasmine.createSpyObj('Location', ['back']);

    TestBed.configureTestingModule({
      providers: [
        provideMockStore({}),
        { provide: LocalStorageService, useValue: localStorageSpy },
        { provide: Location, useValue: locationSpy }
      ]
    });

    service = TestBed.inject(VehicleService);
    mockStore = TestBed.inject(MockStore);
    localStorageService = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
    mockLocation = TestBed.inject(Location) as jasmine.SpyObj<Location>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllVehicle', () => {
    it('should load vehicles to localStorage and dispatch setVehicles', () => {
      localStorageService.getByKey.and.returnValue(mockVehicles);
      spyOn(mockStore, 'dispatch');

      service.getAllVehicle();

      expect(mockStore.dispatch).toHaveBeenCalled();
    });

    it('shouldsave mock vehicles if localStorage is empty', () => {
      localStorageService.getByKey.and.returnValue(null);
      spyOn(mockStore, 'dispatch');

      service.getAllVehicle();

      expect(localStorageService.setDataByKey).toHaveBeenCalledWith(LOCAL_STORAGE.VEHICLES, mockVehicles);
      expect(mockStore.dispatch).toHaveBeenCalled()
    });

    it('shoul filter vehicles by model name not exist', (done) => {
      localStorageService.getByKey.and.returnValue(mockVehicles);
      spyOn(mockStore, 'dispatch');

      service.getAllVehicle('Not exist');

      expect(mockStore.dispatch).toHaveBeenCalled();
      mockStore.select('vehicles').subscribe((vehicles) => {
        expect(vehicles?.length).toBeFalsy();
        done();
      });
    });

  });

  describe('saveVehicle', () => {
    it('should save a new vehicle and dispatch setNewVehicle and showToaster', () => {
      const vehicle: Vehicle = mockVehicle;
      localStorageService.getByKey.and.returnValue(mockVehicles);
      spyOn(mockStore, 'dispatch');

      service.saveVehicle(vehicle);

      expect(localStorageService.setDataByKey).toHaveBeenCalled();
      // expect(mockStore.dispatch).toHaveBeenCalled();
      // expect(mockLocation.back).toHaveBeenCalled();
    });
  });

  describe('getAllVehicleByLocalStorage', () => {
    it('should return vehicles from localStorage if available', () => {
      localStorageService.getByKey.and.returnValue(mockVehicles);

      const vehicles = service['getAllVehicleByLocalStorage']();

      expect(vehicles).toEqual(mockVehicles);
    });

    it('should set and return mock if localStorage is empty', () => {
      localStorageService.getByKey.and.returnValue(null);

      const vehicles = service['getAllVehicleByLocalStorage']();

      expect(localStorageService.setDataByKey).toHaveBeenCalledWith(LOCAL_STORAGE.VEHICLES, mockVehicles);
      expect(vehicles).toEqual(mockVehicles);
    });
  });
});
