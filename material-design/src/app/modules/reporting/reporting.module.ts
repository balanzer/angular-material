import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportByVendorComponent } from './report-by-vendor/report-by-vendor.component';
import { ReportByPageComponent } from './report-by-page/report-by-page.component';
import { ReportByRegionComponent } from './report-by-region/report-by-region.component';
import { ReportByBrandComponent } from './report-by-brand/report-by-brand.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReportByVendorComponent, ReportByPageComponent, ReportByRegionComponent, ReportByBrandComponent],
  exports: [ReportByVendorComponent, ReportByPageComponent, ReportByRegionComponent, ReportByBrandComponent]
})
export class ReportingModule { }
