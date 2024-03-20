import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;
  constructor(private router:Router)
  {

  }
  validate(form: NgForm) {
    console.log(form)
    this.username = form.value.email;
    this.password = form.value.pswd;
    if (this.username == "citi@gmail.com" && this.password == "citi") {
      alert("LOGIN SUCCESS")
      this.router.navigate(['employees']);
    }
    else {
      alert("ENTER VALID CREDENTIALS")
    }
  }

}
