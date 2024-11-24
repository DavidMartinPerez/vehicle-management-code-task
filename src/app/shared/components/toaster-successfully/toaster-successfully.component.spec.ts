import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterSuccessfullyComponent } from './toaster-successfully.component';
import { provideMockStore } from '@ngrx/store/testing';
import { signal } from '@angular/core';
import { Store } from '@ngrx/store';

const initialState = {
  vehicle: {
    showToaster: false
  },
};

describe('ToasterSuccessfullyComponent', () => {
  let component: ToasterSuccessfullyComponent;
  let fixture: ComponentFixture<ToasterSuccessfullyComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToasterSuccessfullyComponent],
      providers: [provideMockStore({initialState})]
    })
    .compileComponents();

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(ToasterSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
