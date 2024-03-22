import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hello="DONT sleep"
  employee:any;
  result:boolean=true;//input type  value={{employee.FirstName}}
  constructor() {
    this.employee = {
      FirstName : "qwerty",
      LastName : "Kumar",
      Gender : "Male"
  };
 }
}
