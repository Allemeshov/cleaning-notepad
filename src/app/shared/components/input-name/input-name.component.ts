import {Component, Input} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./input-name.component.scss', '../../styles/shared.scss']
})
export class InputNameComponent {

  @Input()
  nameControl!: FormControl<string | null>;

  constructor() {
    if (!this.nameControl) {
      this.nameControl = new FormControl<string>('', [Validators.required]);
    }
  }

  getErrorMessage(): string {
    if (this.nameControl.hasError('required')) {
      return 'You must enter a value';
    }

    return '';
  }
}
