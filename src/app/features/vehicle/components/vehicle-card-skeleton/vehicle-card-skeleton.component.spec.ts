import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCardSkeletonComponent } from './vehicle-card-skeleton.component';

describe('VehicleCardSkeletonComponent', () => {
  let component: VehicleCardSkeletonComponent;
  let fixture: ComponentFixture<VehicleCardSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleCardSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
