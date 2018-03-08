import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';


//hammerjs
import  'hammerjs'

//Material 
import { MatButtonModule, MatCheckboxModule } from '@angular/material'
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
    
    MatButtonModule, MatCheckboxModule,BrowserAnimationsModule,
    MatSidenavModule, MatInputModule, MatMenuModule, MatToolbarModule,
    MatIconModule, MatStepperModule, MatProgressBarModule, MatTooltipModule,
    MatSelectModule, MatListModule,
  ],
  declarations: [FooterComponent],
  exports:[FooterComponent]
})
export class SharedModule { }
