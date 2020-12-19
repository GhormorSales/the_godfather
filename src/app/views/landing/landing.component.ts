import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
})
export class LandingComponent implements OnInit {
  constructor() {}
  @ViewChild('fullName') fullName: ElementRef;

  ngOnInit(): void {}

  public checkInput(event) {
    const input = (<HTMLInputElement>document.getElementById("fullName")).value;
    if (input.toLowerCase().replace(" ", "") === "logandaft") {
      alert("Congratulations! You figured out who the CEO is! The password is Daft6Rentax. As a reminder the email is daftlogan@gmail.com.");
    } else {
      alert("You are wrong, try again! Make sure you are looking at all of the links!");
    }
  }
}
