import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { ComponentRef } from '@angular/core';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let componentRef: ComponentRef<SelectComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef
    componentRef.setInput('label', 'Test label')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
