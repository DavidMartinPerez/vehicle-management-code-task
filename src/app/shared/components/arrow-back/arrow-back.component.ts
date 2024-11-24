import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-arrow-back',
  imports: [],
  templateUrl: './arrow-back.component.html',
  styleUrl: './arrow-back.component.scss'
})
export class ArrowBackComponent {

  location = inject(Location)

  goBack() {
    this.location.back();
  }

}
