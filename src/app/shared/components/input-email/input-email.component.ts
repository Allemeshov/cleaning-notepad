import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./input-email.component.scss', '../../styles/shared.scss']
})
export class InputEmailComponent {

  @Input()
  emailControl!: FormControl<string | null>;

  constructor() {
    if (!this.emailControl) {
      this.emailControl = new FormControl<string>('', [Validators.required, Validators.email]);
    }
  }

  getErrorMessage(): string {
    if (this.emailControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailControl.hasError('email') ? 'Not a valid email' : '';
  }
}
