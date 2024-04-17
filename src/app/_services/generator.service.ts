import { Injectable } from '@angular/core';
import {BRANDS, Car} from "../_interfaces/Car";

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generateCars(limit: number): Car[] {
    return Array.from({length: limit}, (_, i) => i + 1).map(() => {
      return {
          brand: BRANDS[Math.floor(Math.random() * BRANDS.length)],
          plate: this.generatePlate(),
          manufacturingDate: this.randomBetween(1950, 2024)
      }
    })
  }

  private randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  private generatePlate(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let plate = '';

    for (let i = 0; i < 4; i++) {
      plate += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    plate += '-';

    for (let i = 0; i < 3; i++) {
      plate += this.randomBetween(0, 9).toString();
    }

    return plate;
  }
}
