import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Car} from "../../../_interfaces/Car";
import {GeneratorService} from "../../../_services/generator.service";
import {NzTableComponent} from "ng-zorro-antd/table";
import {Subject} from "rxjs";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-task5-b',
  templateUrl: './task5-b.component.html',
  styleUrls: ['./task5-b.component.less']
})
export class Task5BComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<TableEntry>;
  private destroy$ = new Subject<boolean>();
  cars: TableEntry[] = [];

  constructor(private generatorService: GeneratorService) { }

  ngOnInit(): void {
        this.cars = (this.generatorService.generateCars(10000)).map((car, index) => ({index, car}));
    }

  trackByIndex(_: number, data: TableEntry): number {
    return data.index;
  }

  ngAfterViewInit(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: number) => {
        console.log('scroll index to', data);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

export interface TableEntry {
  index: number;
  car: Car
}
