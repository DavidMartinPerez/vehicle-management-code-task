import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { UserTypeEnum } from '@core/models/user.model';
import { Login } from '@store/auth/auth.actions';
import { By } from '@angular/platform-browser';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthComponent],
      providers: [provideMockStore({})]
    })
    .compileComponents();

    store = TestBed.inject(Store) as MockStore;

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch with user when User button is clicked', () => {
    spyOn(store, 'dispatch');
    const userButton = fixture.debugElement.query(By.css('app-button[text="User"]'));

    userButton.triggerEventHandler('onClick', null);
    expect(store.dispatch).toHaveBeenCalledWith(
      Login({ userType: UserTypeEnum.USER })
    );
  });

  it('should dispatch with admin when Admin button is clicked', () => {
    spyOn(store, 'dispatch');
    const adminButton = fixture.debugElement.query(By.css('app-button[text="Admin"]'));

    adminButton.triggerEventHandler('onClick', null);
    expect(store.dispatch).toHaveBeenCalledWith(
      Login({ userType: UserTypeEnum.ADMIN })
    );
  });
});
