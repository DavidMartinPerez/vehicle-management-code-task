import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ButtonComponent } from '@shared/components/button/button.component';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Logout } from '@store/auth/auth.actions';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, ButtonComponent],
      providers: [provideMockStore({})]
    })
    .compileComponents();

    mockStore = TestBed.inject(Store) as MockStore;
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch Logout when Logout button is clicked', () => {
    spyOn(mockStore, 'dispatch');
    component.logout();

    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});
