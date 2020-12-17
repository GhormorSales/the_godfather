import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  emailSource = 1954688647;
  passwordSource = -1632167863;

  constructor() {}

  ngOnInit(): void {}

  public checkPassword() {
    const email = (<HTMLInputElement>document.getElementById("email")).value;
    const password = (<HTMLInputElement>document.getElementById("password")).value;
    let hashedEmail = 0;
    let hashedPassword = 0;
    let i;
    let chr;
    for (i = 0; i < email.length; i++) {
      chr   = email.charCodeAt(i);
      hashedEmail  = ((hashedEmail << 5) - hashedEmail) + chr;
      hashedEmail |= 0; 
    }
    for (i = 0; i < password.length; i++) {
      chr   = password.charCodeAt(i);
      hashedPassword  = ((hashedPassword << 5) - hashedPassword) + chr;
      hashedPassword |= 0; 
    }

    if (this.emailSource === hashedEmail && this.passwordSource === hashedPassword) {
      window.location.href = "admin/dashboard";
    }
  }
}
