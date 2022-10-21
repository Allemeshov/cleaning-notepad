import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {Router} from "@angular/router";

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
              private router: Router) {
    this.registerNavigatedSubject.subscribe(() => {
      this.router.navigateByUrl('register').then();
    })
  }
}
