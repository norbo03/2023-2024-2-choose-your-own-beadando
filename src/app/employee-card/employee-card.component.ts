import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Employee} from "../_interfaces/Employee";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.less'
})
export class EmployeeCardComponent {

  @Input({ required: true }) employee!: Employee;
  @Input({ required: true }) highlight!: boolean;

  @Output() fixedError = new EventEmitter<Employee>();
  highlightEmployee(): boolean {
    return this.highlight && this.employee.numberOfErrors >= 10;
  }

  resolveError() {
    this.fixedError.emit(this.employee);
  }
}
