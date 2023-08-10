import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My button";
  i = 0;

  selectDisabled = false;
  selectedOption = 1;

  inputName = "Alvaro";
  constructor(){
  }

  spinnerMode : ProgressSpinnerMode = 'determinate';
  btnEnable = true;

  ngOnInit(): void {

  }

  save(){
    console.log("clicou")
  }

  inc(){
    this.i++;
    this.buttonName = "It was clicked" + this.i + "times";
  }

  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(() => {this.btnEnable = true;
    this.spinnerMode = "determinate";
    }, 3000  );
  }

  cbChange(event: any){
    console.log(event.checked)
    this.selectDisabled = event.checked;
  }

  selectionChange(event: any){
    console.log(event)
    this.selectedOption = event.value;
  }

/*
  inputEvent(event: any){
    console.log(event.target.value)
    console.log(this.inputName);
  }
  */

}
