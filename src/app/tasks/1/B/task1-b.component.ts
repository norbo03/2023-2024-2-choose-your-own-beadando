import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-task1-b',
  templateUrl: './task1-b.component.html',
  styleUrls: ['./task1-b.component.less']
})
export class Task1BComponent implements OnInit, OnChanges{
  screenSize: string = '';

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.setScreenSize();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setScreenSize();
  }

  setScreenSize() {
    if (this.breakpointObserver.isMatched(Breakpoints.Small) || this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      this.screenSize = 'Small';
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.screenSize = 'Medium';
    } else {
      this.screenSize = 'Large';
    }
  }

}
