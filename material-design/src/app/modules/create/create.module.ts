import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewCampaignComponent } from './add-new-campaign/add-new-campaign.component';
import { AddNewVendorComponent } from './add-new-vendor/add-new-vendor.component';

import { BrowserModule } from '@angular/platform-browser';


import {ReactiveFormsModule, FormsModule} from '@angular/forms';


//hammerjs
import  'hammerjs'

//Material 
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Sidenav
import {MatSidenavModule} from '@angular/material/sidenav';

//Input
import {MatInputModule} from '@angular/material/input';

//Menu 
import {MatMenuModule} from '@angular/material/menu';

//toolbar
import {MatToolbarModule} from '@angular/material/toolbar';

//icon
import {MatIconModule} from '@angular/material/icon';

// stepper
import {MatStepperModule} from '@angular/material/stepper';

//progress-bar
import {MatProgressBarModule} from '@angular/material/progress-bar';

//tooltip
import {MatTooltipModule} from '@angular/material/tooltip';

//select
import {MatSelectModule} from '@angular/material/select';

//list
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule,BrowserAnimationsModule,
    MatSidenavModule, MatInputModule, MatMenuModule, MatToolbarModule,
    MatIconModule, MatStepperModule, MatProgressBarModule, MatTooltipModule,
    MatSelectModule, MatListModule,MatDatepickerModule, MatNativeDateModule
  ],
  declarations: [AddNewCampaignComponent, AddNewVendorComponent],
  exports:[AddNewCampaignComponent, AddNewVendorComponent]
})
export class CreateModule { }
