import {Component, OnInit} from '@angular/core';
import {Role} from "../../../_interfaces/Employee";

@Component({
  selector: 'app-task4-a',
  templateUrl: './task4-a.component.html',
  styleUrls: ['./task4-a.component.less']
})
export class Task4AComponent {
  selectedPermissions: Role[] = [];
  constructor() {
  }
  protected readonly Role = Role;
}
