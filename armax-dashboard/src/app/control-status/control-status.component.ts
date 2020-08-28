import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ArmaxDataService } from '../armax-data.service';
import * as $ from 'jquery';
export interface PeriodicControlElement {
  status: string;
  control: number;
  setpoint: number;
  measured: string;
  unit: string;
  action: string;
}
var ELEMENT_DATA: PeriodicControlElement[] = [];
@Component({
  selector: 'app-control-status',
  templateUrl: './control-status.component.html',
  styleUrls: ['./control-status.component.css'],
})
export class ControlStatusComponent implements OnInit {
  displayedColumns: string[] = [
    'status',
    'control',
    'setpoint',
    'measured',
    'unit',
    'action',
  ];
  dataSource: MatTableDataSource<PeriodicControlElement>;
  //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private armaxDataService: ArmaxDataService) {}
  ngOnInit(): void {
    this.getLaps();
  }
  getLaps() {
    this.armaxDataService.getControlstatus().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      // return res;
    });
  }
  getRecord() {
    console.log('action');
  }
}
