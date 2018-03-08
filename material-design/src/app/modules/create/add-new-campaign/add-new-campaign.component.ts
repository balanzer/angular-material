import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'mat-add-new-campaign',
  templateUrl: './add-new-campaign.component.html',
  styleUrls: ['./add-new-campaign.component.css']
})
export class AddNewCampaignComponent implements OnInit {


  title = 'mat';
  showFiller = false;

  isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
  
    partnerAgreementFG: FormGroup;
    placeHolderFG: FormGroup;
  
  
    //values init 
    partnerAgreementValues = [
        {name: 'Master Service Agreement', value: 'MSA'},
        {name: 'Master Advertiser Agreement', value: 'MAA'},
        {name: 'Software As A Service', value: 'SAAS'},
    ];
  
    
  
  
    partnerAgreementCtrl = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required, Validators.email]);
  
  
    constructor(private _formBuilder: FormBuilder) {   }
  
    ngOnInit() {
     
  
  
      // form section   
      this.firstFormGroup = this._formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
  
      this.partnerAgreementFG = this._formBuilder.group({
         
      });
  
  
      this.placeHolderFG = this._formBuilder.group({
         
      });
  
    }
  
     getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }
}
