import { Component } from '@angular/core';

@Component({
  selector: 'app-task1-a',
  templateUrl: './task1-a.component.html',
  styleUrls: ['./task1-a.component.less']
})
export class Task1AComponent {
  sliders = new Map<string, Slider>([
    ['Red', new Slider(0, 0, 255, 1 )],
    ['Green', new Slider(0, 0, 255, 1 )],
    ['Blue', new Slider(0, 0, 255, 1 )],
    ['Alpha', new Slider(1.00, 0.00, 1.00, 0.01)
    ]
  ]);

  constructor() {}
  getTooltipText(value: number, colorName: string): string {
    return `${colorName} channel: ${value}`;
  }

  get color() {
    const red = this.sliders.get('Red')!.value;
    const green = this.sliders.get('Green')!.value;
    const blue = this.sliders.get('Blue')!.value;
    const alpha = this.sliders.get('Alpha')!.value;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

}

class Slider {
  _value: number;
  _min: number;
  _max: number;
  _step: number;

  constructor(value: number, min: number, max: number, step: number) {
    this._value = value;
    this._min = min;
    this._max = max;
    this._step = step;
  }

  get value(): number {
    return this._value;
  }

  set value(newValue: number) {
    this._value = newValue;
  }

  get min(): number {
    return this._min;
  }

  get max(): number {
    return this._max;
  }

  get step(): number {
    return this._step;
  }

}
