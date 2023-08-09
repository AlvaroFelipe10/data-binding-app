import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {

  firstname = "John";
  age = "100";

  person = {
    firstname: "Alvaro",
    lastname: "Abadesso",
    age: 27,
    addres: "Route 100"
  }

  constructor(){

  }
}
