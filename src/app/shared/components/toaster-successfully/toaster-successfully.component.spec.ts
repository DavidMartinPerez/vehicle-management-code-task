import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterSuccessfullyComponent } from './toaster-successfully.component';

describe('ToasterSuccessfullyComponent', () => {
  let component: ToasterSuccessfullyComponent;
  let fixture: ComponentFixture<ToasterSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToasterSuccessfullyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToasterSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
