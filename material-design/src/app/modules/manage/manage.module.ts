import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCampaignComponent } from './manage-campaign/manage-campaign.component';
import { ManageVendorComponent } from './manage-vendor/manage-vendor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ManageCampaignComponent, ManageVendorComponent],
  exports: [ManageCampaignComponent, ManageVendorComponent]
})
export class ManageModule { }
