import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/main/login.component';
import {RouterModule} from "@angular/router";
import {InputPasswordComponent} from '../../shared/components/input-password/input-password.component';
import {InputEmailComponent} from '../../shared/components/input-email/input-email.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {WaveButtonComponent} from "../../shared/components/wave-button/wave-button.component";


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LoginComponent
      }
    ]),
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    WaveButtonComponent,
    InputEmailComponent,
    InputPasswordComponent
  ]
})
export class LoginModule {
}
