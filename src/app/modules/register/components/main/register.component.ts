import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {RegisterUserDataInterface} from "../../../../shared/interfaces/register-user-data.interface";
import {AuthService} from "../../../../shared/services/auth.service";
import {SnackBarService} from "../../../../shared/services/snack-bar.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  emailControl = new FormControl<string>('', [Validators.required, Validators.email]);
  passwordControl = new FormControl<string>('', [Validators.required, Validators.minLength(8)]);
  passwordConfirmControl = new FormControl<string>('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  phoneControl = new FormControl<string>('', [
    Validators.required,
    Validators.pattern(new RegExp(`(\\(?([\\d \\-)–+\\/(]+){6,}\\)?([ .\\-–\\/]?)([\\d]+))`))
  ]);
  nameControl = new FormControl<string>('', [Validators.required]);

  options = this.formBuilder.group({
    email: this.emailControl,
    password: this.passwordControl,
    passwordConfirmation: this.passwordConfirmControl,
    phone: this.phoneControl,
    name: this.nameControl
  });

  loginNavigatedSubject: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private snackBarService: SnackBarService) {
    this.loginNavigatedSubject.subscribe(() => {
      this.router.navigateByUrl('login').then();
    })
  }

  register(): void {
    if (this.options.invalid) {
      return;
    }

    const data: RegisterUserDataInterface = {
      login: this.emailControl.value!,
      password: this.passwordControl.value!,
      name: this.nameControl.value!,
      phone: this.phoneControl.value!
    };

    this.authService.register(data)
      .subscribe(() => {
        this.router.navigateByUrl('login').then(() => {
          const acted$ = this.snackBarService.openSnackBar(
            'New User has been successfully registered.',
            'Create another one'
          );
          if (acted$) {
            acted$.subscribe(() => {
              this.router.navigateByUrl('register').then();
            })
          }
        });
      });
  }
}
