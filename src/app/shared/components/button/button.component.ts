import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  readonly text = input<string>();
  readonly onClick = output<void>();
  readonly isDisabed = input<boolean>(false);



  click() {
    this.onClick.emit();
  }
}
