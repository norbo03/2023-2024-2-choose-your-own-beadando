import { Component } from '@angular/core';
import {Employee, Role} from "../../../_interfaces/Employee";

@Component({
  selector: 'app-task2-a',
  templateUrl: './task2-a.component.html',
  styleUrls: ['./task2-a.component.less']
})
export class Task2AComponent {
  employees: Employee[] = [
    {name: 'John Doe', role: Role.READER, numberOfErrors: 0},
    {name: 'Jane Doe', role: Role.WRITER, numberOfErrors: 1},
    {name: 'Jim Doe', role: Role.ADMIN, numberOfErrors: 2},
    {name: 'Jill Doe', role: Role.READER, numberOfErrors: 3},
    {name: 'Jack Doe', role: Role.WRITER, numberOfErrors: 10},
    {name: 'Jenny Doe', role: Role.ADMIN, numberOfErrors: 20},
    {name: 'Jared Doe', role: Role.READER, numberOfErrors: 30},
  ];
  highlightEmployees: boolean
  constructor() {
    this.highlightEmployees = false;
  }

  onFixedError(employee: Employee) {
    employee.numberOfErrors = Math.max(9, employee.numberOfErrors - 1);
  }

}

