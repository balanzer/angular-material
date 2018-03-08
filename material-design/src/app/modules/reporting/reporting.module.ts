import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportByVendorComponent } from './report-by-vendor/report-by-vendor.component';
import { ReportByPageComponent } from './report-by-page/report-by-page.component';
import { ReportByRegionComponent } from './report-by-region/report-by-region.component';
import { ReportByBrandComponent } from './report-by-brand/report-by-brand.component';

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSortModule, MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule, MatPaginatorModule, MatFormFieldModule,MatInputModule, MatSortModule, MatToolbarModule, MatButtonModule
  ],
  declarations: [ReportByVendorComponent, ReportByPageComponent, ReportByRegionComponent, ReportByBrandComponent],
  exports: [ReportByVendorComponent, ReportByPageComponent, ReportByRegionComponent, ReportByBrandComponent]
})
export class ReportingModule { }
