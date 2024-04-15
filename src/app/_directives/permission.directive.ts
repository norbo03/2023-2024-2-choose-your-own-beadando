import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Role} from "../_interfaces/Employee";

@Directive({
  selector: '[appPermission]',
})
export class PermissionDirective implements OnInit, OnChanges {

  @Input() appPermission!: Role;
  @Input() selectedPermissions: Role[] = [];


  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPermissions']) {
      this.setBackgroundColorBasedOnPermission(this.selectedPermissions);
    }
  }

  ngOnInit(): void {
    this.setBackgroundColorBasedOnPermission([]);
  }

  private setBackgroundColorBasedOnPermission(permissions: Role[]) {
    this.restoreDefault();

    if (this.appPermission == Role.ADMIN && !permissions.includes(Role.ADMIN)) {
      this.el.nativeElement.style.display = 'none';
    }

    if (this.appPermission === Role.WRITER && !permissions.includes(Role.WRITER)) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
  }

  private restoreDefault() {
    this.el.nativeElement.style.display = 'block';
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }

}
