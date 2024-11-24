import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@core/layout/footer/footer/footer.component';
import { HeaderComponent } from '@core/layout/header/header/header.component';
import { ToasterSuccessfullyComponent } from '@shared/components/toaster-successfully/toaster-successfully.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterOutlet, FooterComponent, HeaderComponent, ToasterSuccessfullyComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});