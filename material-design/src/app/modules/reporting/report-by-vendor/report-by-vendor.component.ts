


import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'mat-report-by-vendor',
  templateUrl: './report-by-vendor.component.html',
  styleUrls: ['./report-by-vendor.component.css']
})
export class ReportByVendorComponent implements OnInit {



  ngOnInit() {
  }


  displayedColumns = ['id', 'name', 'progress', 'viewid'];
  dataSource: MatTableDataSource<ReportData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 records
    const reports: ReportData[] = [];
    for (let i = 1; i <= 3; i++) { reports.push(createNewRecord(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(reports);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Builds and returns a new User. */
function createNewRecord(id: number): ReportData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] ;

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 10).toString(),
    viewid: id.toString(),
  };
}


const NAMES = ['Facebook', 'Adara', 'Google Adwords'];

export interface ReportData {
  id: string;
  name: string;
  progress: string;
  viewid :string; 
}
