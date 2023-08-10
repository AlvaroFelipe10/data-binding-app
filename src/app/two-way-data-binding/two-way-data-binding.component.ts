import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {

  name1: string = "";
  name2: string = "";

  client = {
    firstName: "Alvaro",
    lastName: "Abadesso",
    address: "Route 100",
    age: 0
  }
}
