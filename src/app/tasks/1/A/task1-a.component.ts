import { Component } from '@angular/core';

@Component({
  selector: 'app-task1-a',
  templateUrl: './task1-a.component.html',
  styleUrls: ['./task1-a.component.less']
})
export class Task1AComponent {
  colors = {
    'Red': 0,
    'Green': 0,
    'Blue': 0,
    'Alpha': 1.00
  };

  red: number;
  green: number;
  blue: number;
  alpha: number;

  constructor() {
    this.red = 0;
    this.green = 0;
    this.blue = 0;
    this.alpha = 1.00;
  }

  get color() {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
  }
}
