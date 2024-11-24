import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button-link',
  imports: [RouterModule],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.scss'
})
export class ButtonLinkComponent {

    readonly text = input<string>();
    readonly url = input<string>();

  }
