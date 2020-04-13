import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData = {
    email: "",
    password: ""
  };
  constructor(private router: Router) {}

  ngOnInit() {}

  userCredentials() {
    switch (this.userData.email) {
      case "district":
        localStorage.setItem("role", "District Manager");
        break;
      case "manager":
        localStorage.setItem("role", "Marketing Manager");
        break;
      case "commisioner":
        localStorage.setItem("role", "Commisioner");
        break;
      case "department":
        localStorage.setItem("role", "Finance Department");
        break;
        case "admin":
        localStorage.setItem("role", "Admin");
        break;
      case "default":
        "";
    }
    this.router.navigate(["/Dashboard/Home"]);
  }
}
