import { Component, forwardRef, input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})
export class InputComponent implements OnChanges, ControlValueAccessor {
  onChanged: any = () => {};
  onTouched: any = () => {};
  value!: string;
  disabled!: boolean;

  valueChanged(val: string) {
    this.onChange(val);
  }

  writeValue(value: any): void {
    this.value = value || '';
  }
  onChange = (_: string) => {};
  ngOnChanges(_: SimpleChanges): void {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  label = input.required<string>();
  placeholder = input.required<string>();
  type = input<string>('text');
}
