import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCampaignComponent } from './manage-campaign/manage-campaign.component';
import { ManageVendorComponent } from './manage-vendor/manage-vendor.component';

import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule, MatPaginatorModule, MatFormFieldModule,MatInputModule, MatSortModule
  ],
  declarations: [ManageCampaignComponent, ManageVendorComponent],
  exports: [ManageCampaignComponent, ManageVendorComponent]
})
export class ManageModule { }
