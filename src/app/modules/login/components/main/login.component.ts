import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../../../shared/services/auth.service";
import {LoginUserData} from "../../../../shared/interfaces/login-user-data.interface";
import {SnackBarService} from "../../../../shared/services/snack-bar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailControl = new FormControl<string>('', [Validators.required, Validators.email]);
  passwordControl = new FormControl<string>('', [Validators.required, Validators.minLength(8)]);
  options = this.formBuilder.group({
    email: this.emailControl,
    password: this.passwordControl,
  });

  registerNavigatedSubject: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private snackBarService: SnackBarService) {
    this.registerNavigatedSubject.subscribe(() => {
      this.router.navigateByUrl('register').then();
    })
  }

  logInUser(): void {

    if (this.options.invalid) {
      alert('Some fields are invalid. Try again.');
      return;
    }

    const formValues: LoginUserData = {
      login: this.options.value.email ?? '',
      password: this.options.value.password ?? ''
    };

    this.authService.login(formValues).subscribe({
      next: () => {
        if (this.authService.isLoggedIn()) {
          this.router.navigateByUrl('home').then(() => {
            const acted$ = this.snackBarService.openSnackBar(
              'Successful login',
              'Logout'
            );

            if (acted$) {
              acted$.subscribe(() => {
                this.authService.logout();
                this.router.navigateByUrl('login').then();
              })
            }
          });
        }
      },
      error: err => {
        alert(err)
      },
      complete: () => {
      }
    });
  }
}
