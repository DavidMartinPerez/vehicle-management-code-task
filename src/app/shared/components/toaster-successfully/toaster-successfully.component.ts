import { Component, effect, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { hideToaster } from '@store/vehicle/vehicle.actions';
import { showToaster } from '@store/vehicle/vehicle.selector';

@Component({
  selector: 'app-toaster-successfully',
  imports: [],
  templateUrl: './toaster-successfully.component.html',
  styleUrl: './toaster-successfully.component.scss'
})
export class ToasterSuccessfullyComponent {

  public message = 'Save has been successfully completed ';
  store = inject(Store)
  showToaster = this.store.selectSignal(showToaster)
  showAlert: boolean = false;

  constructor() {
    effect(() => {
      if(this.showToaster()) {
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
          this.store.dispatch(hideToaster());
        }, 3000);
      }
    });
  }
}
