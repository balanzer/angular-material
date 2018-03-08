import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'mat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mat';
  showFiller = false;

  
    constructor(private _formBuilder: FormBuilder) {   }
  
    ngOnInit() {
     
  
  
    }
  
      
  }
  
