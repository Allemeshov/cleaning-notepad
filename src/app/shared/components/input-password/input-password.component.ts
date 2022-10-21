import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    NgIf
  ],
  styleUrls: ['./input-password.component.scss', '../../styles/shared.scss']
})
export class InputPasswordComponent {

  @Input()
  passwordControl!: FormControl<string | null>;

  constructor() {
    if (!this.passwordControl) {
      this.passwordControl = new FormControl<string>('', [Validators.required, Validators.min(8)]);
    }
  }

  hide = true;

  getErrorMessage(): string {
    console.log(this.passwordControl.errors)

    if (this.passwordControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.passwordControl.hasError('minlength') ? 'Your password have at lease 8 symbols' : '';
  }
}
