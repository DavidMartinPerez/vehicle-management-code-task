import { TestBed } from '@angular/core/testing';

import { VehicleService } from './vehicle.service';
import { provideMockStore } from '@ngrx/store/testing';

describe('VehicleService', () => {
  let service: VehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})]
    });
    service = TestBed.inject(VehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
