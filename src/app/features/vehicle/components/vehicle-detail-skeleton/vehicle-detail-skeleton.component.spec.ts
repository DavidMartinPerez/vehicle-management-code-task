import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailSkeletonComponent } from './vehicle-detail-skeleton.component';

describe('VehicleDetailSkeletonComponent', () => {
  let component: VehicleDetailSkeletonComponent;
  let fixture: ComponentFixture<VehicleDetailSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleDetailSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
