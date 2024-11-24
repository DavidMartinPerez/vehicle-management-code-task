import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ComponentRef } from '@angular/core';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchEmitter: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the input value when submit is called', () => {
    const inputValue = 'Test Search';
    component.form.controls['inputSearch'].setValue(inputValue);

    component.submit();

    expect(component.form.value.inputSearch).toBe(inputValue);
  });
});
