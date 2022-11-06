import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './components/main/register.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {InputEmailComponent} from "../../shared/components/input-email/input-email.component";
import {InputPasswordComponent} from "../../shared/components/input-password/input-password.component";
import {WaveButtonComponent} from "../../shared/components/wave-button/wave-button.component";
import {InputNameComponent} from "../../shared/components/input-name/input-name.component";
import {InputPhoneComponent} from "../../shared/components/input-phone/input-phone.component";
import {MatButtonModule} from "@angular/material/button";
import {
  InputPasswordConfirmationComponent
} from "../../shared/components/input-password-confirmation/input-password-confirmation.component";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: RegisterComponent
      }
    ]),
    ReactiveFormsModule,
    InputEmailComponent,
    InputPasswordComponent,
    WaveButtonComponent,
    InputNameComponent,
    InputPhoneComponent,
    MatButtonModule,
    InputPasswordConfirmationComponent
  ]
})
export class RegisterModule {
}
