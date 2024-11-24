import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDasboardComponent } from './vehicle-dasboard.component';

describe('VehicleDasboardComponent', () => {
  let component: VehicleDasboardComponent;
  let fixture: ComponentFixture<VehicleDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleDasboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
