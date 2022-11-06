import {Component, Input, OnInit, Output} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-input-password-confirmation',
  templateUrl: './input-password-confirmation.component.html',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    NgIf
  ],
  styleUrls: ['./input-password-confirmation.component.scss', '../../styles/shared.scss']
})
export class InputPasswordConfirmationComponent implements OnInit {

  @Input()
  comparingPassword?: string | null = undefined;

  @Input()
  passwordConfirmationControl!: FormControl<string | null>;

  @Output()
  isPasswordValid: boolean = false;

  public hide = true;


  ngOnInit(): void {
    if (this.comparingPassword === undefined) {
      throw new Error('No password to compare has been provided.');
    }

    if (!this.passwordConfirmationControl) {
      return;
    }

    this.passwordConfirmationControl.addValidators(this.confirmPassword())
  }


  confirmPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      if (!this.comparingPassword) {
        return null;
      }

      const value = control.value;
      if (!value) {
        return null;
      }

      const passwordValid = value === this.comparingPassword;
      return !passwordValid ? {unconfirmedPassword: true} : null;
    }
  }

  getErrorMessage(): string {
    if (this.passwordConfirmationControl.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.passwordConfirmationControl.hasError('minlength')) {
      return 'Your password have at lease 8 symbols';
    }

    if (this.passwordConfirmationControl.hasError('unconfirmedPassword')) {
      return 'Passwords are not matched';
    }

    return '';
  }
}
