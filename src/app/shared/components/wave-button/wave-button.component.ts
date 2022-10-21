import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  standalone: true,
  selector: 'app-wave-button',
  templateUrl: './wave-button.component.html',
  styleUrls: ['./wave-button.component.scss']
})
export class WaveButtonComponent implements OnInit {

  @Input() backgroundColor: string = '#000';

  @Input()
  clicked: Subject<void> | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleButtonClick() {
    if (!this.clicked) {
      return;
    }

    this.clicked.next();
  }
}
