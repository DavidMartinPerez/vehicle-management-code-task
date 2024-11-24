import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLinkComponent } from './button-link.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ButtonLinkComponent', () => {
  let component: ButtonLinkComponent;
  let fixture: ComponentFixture<ButtonLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLinkComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
