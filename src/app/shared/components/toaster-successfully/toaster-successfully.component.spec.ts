import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToasterSuccessfullyComponent } from './toaster-successfully.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { showToaster } from '@store/vehicle/vehicle.selector';
import { hideToaster } from '@store/vehicle/vehicle.actions';

const initialState = {
  vehicle: {
    showToaster: false
  },
};

describe('ToasterSuccessfullyComponent', () => {
  let component: ToasterSuccessfullyComponent;
  let fixture: ComponentFixture<ToasterSuccessfullyComponent>;
  let mockStore: MockStore;
  let dispatchSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToasterSuccessfullyComponent],
      providers: [provideMockStore({
          initialState
      })]
    })
    .compileComponents();

    mockStore = TestBed.inject(MockStore);
    dispatchSpy = spyOn(mockStore, 'dispatch');
    fixture = TestBed.createComponent(ToasterSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the toaster and hide it after 3 seconds', (done) => {
    mockStore.overrideSelector(showToaster, true);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(component.showAlert).toBeTrue();

    setTimeout(() => {
      expect(component.showAlert).toBeFalse();
      expect(dispatchSpy).toHaveBeenCalledWith(hideToaster());
      done();
    }, 3001);
  });
});
