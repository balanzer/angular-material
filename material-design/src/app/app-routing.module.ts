import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewCampaignComponent } from './modules/create/add-new-campaign/add-new-campaign.component';
import { AddNewVendorComponent } from './modules/create/add-new-vendor/add-new-vendor.component';
import { CreateModule } from './modules/create/create.module';
import { ManageModule } from './modules/manage/manage.module';
import { ReportingModule } from './modules/reporting/reporting.module';
import { ManageCampaignComponent } from './modules/manage/manage-campaign/manage-campaign.component';
import { ManageVendorComponent } from './modules/manage/manage-vendor/manage-vendor.component';
import { ReportByVendorComponent } from './modules/reporting/report-by-vendor/report-by-vendor.component';
import { ReportByBrandComponent } from './modules/reporting/report-by-brand/report-by-brand.component';
import { ReportByPageComponent } from './modules/reporting/report-by-page/report-by-page.component';
import { ReportByRegionComponent } from './modules/reporting/report-by-region/report-by-region.component';

const routes: Routes = [
  {path: '',  component: AddNewCampaignComponent},
  {path: 'newcampagin',  component: AddNewCampaignComponent},
  {path: 'newvendor',  component: AddNewVendorComponent},
  {path: 'managecampaign',  component: ManageCampaignComponent},
  {path: 'managevendor',  component: ManageVendorComponent},
  {path: 'repbyvendor',  component: ReportByVendorComponent},
  {path: 'repbybrand',  component: ReportByBrandComponent},
  {path: 'repbypage',  component: ReportByPageComponent},
  {path: 'repbyregion',  component: ReportByRegionComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes),CreateModule, ManageModule, ReportingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
