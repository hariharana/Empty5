import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css']
})
export class SampleformComponent implements OnInit{
  sampleForm: FormGroup;
  preferenceList = [
   {'id': 1 , "display" : 'pref1'},
   {'id': 2 , "display" : 'pref2'},
   {'id': 3 , "display" : 'pref3'},
   {'id': 4 , "display" : 'pref4'}
  ];
  fName = new FormControl('', [Validators.required]);
  mName = new FormControl('', []);
  lName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  bBalance = new FormControl({value : '0' , disabled : true } ,[Validators.required]);
  preferences = new FormControl({value : [1]} , [Validators.required]);

  ngOnInit(){
    this.sampleForm = new FormGroup({
      fName : this.fName ,
      mName : this.mName,
      lName : this.lName,
      email : this.email,
      bBalance: this.bBalance,
      preferences: this.preferences
    });
  }

  editCurrency(){
    this.bBalance.disabled ? this.bBalance.enable() : false;
  }

  submit(){
    if(this.sampleForm.valid){
      console.log(this.sampleForm.getRawValue());
    }
  }

  setFormValue(){
    this.sampleForm.setValue({
      fName : "hari",
      mName: "",
      lName: "A",
      email:"",
      bBalance : "0",
      preferences : [1]
    });
  }

  resetForm(){
    this.sampleForm.reset();
  }
}
