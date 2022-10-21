import {Component, Input} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-input-phone',
  templateUrl: './input-phone.component.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./input-phone.component.scss', '../../styles/shared.scss']
})
export class InputPhoneComponent {

  @Input()
  phoneControl!: FormControl<string | null>;

  constructor() {
    if (!this.phoneControl) {
      this.phoneControl = new FormControl<string>('', [
        Validators.required,
        Validators.pattern(`(\\(?([\\d \\-\\)\\–\\+\\/\\(]+)\\)?([ .\\-–\\/]?)([\\d]+))`)
      ]);
    }
  }

  getErrorMessage(): string {
    if (this.phoneControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.phoneControl.hasError('pattern') ? 'Not a valid phone number' : '';
  }
}
