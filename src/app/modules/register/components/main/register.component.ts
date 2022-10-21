import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  emailControl = new FormControl<string>('', [Validators.required, Validators.email]);
  passwordControl = new FormControl<string>('', [Validators.required, Validators.minLength(8)]);
  phoneControl = new FormControl<string>('', [
    Validators.required,
    Validators.pattern(new RegExp(`(\\(?([\\d \\-)–+\\/(]+){6,}\\)?([ .\\-–\\/]?)([\\d]+))`))
  ]);
  nameControl = new FormControl<string>('', [Validators.required]);

  options = this.formBuilder.group({
    email: this.emailControl,
    password: this.passwordControl,
    phone: this.phoneControl,
    name: this.nameControl
  });

  loginNavigatedSubject: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
    this.loginNavigatedSubject.subscribe(() => {
      this.router.navigateByUrl('login').then();
    })
  }
}
