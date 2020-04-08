import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData = {};
  constructor(private router:Router) {}

  ngOnInit() {}

  userCredentials(){
    console.log(this.userData);
    this.router.navigate(['/Dashboard']);
  }

}
