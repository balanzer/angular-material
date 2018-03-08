import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'mat-manage-campaign',
  templateUrl: './manage-campaign.component.html',
  styleUrls: ['./manage-campaign.component.css']
})
export class ManageCampaignComponent implements OnInit {



  ngOnInit() {
  }


  displayedColumns = ['id', 'name', 'region', 'vendor' , 'manage' ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 20; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      REGION[Math.round(Math.random() * (REGION.length - 1))] + ' ';

  const region = REGION[Math.round(Math.random() * (REGION.length - 1))];
  const vendor = VENDOR[Math.round(Math.random() * (VENDOR.length - 1))];
  return {
    id: id.toString(),
    name: name,
    region: region,
    vendor: vendor,
  };
}


const NAMES = ['Facebook', 'Adara', 'Google Adwords', 'Campaign 1',  'Campaign 2',   'Campaign 3',   'Campaign 4' ];
const REGION = ['AMER', 'GLOBAL', 'GC', 'EUR',  'AMER' ];
const VENDOR = ['Facebook', 'Adara', 'CJ', 'Google'];

export interface UserData {
  id: string;
  name: string;
  region: string;
  vendor: string;
  

}
