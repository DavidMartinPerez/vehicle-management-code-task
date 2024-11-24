import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  disabledd = input<boolean>();
  search = output<string>();

  lastSendValue: string = '';

  public form = new FormGroup({
    inputSearch: new FormControl('')
  });

  submit(){
    const value = this.form?.value?.inputSearch
    this.search.emit(value ?? '');
  }
}
