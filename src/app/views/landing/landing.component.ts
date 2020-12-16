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
      alert("You are correct. The LAST NAME is of particular importance. Add the number '6' at the end, and you have the password!");
    } else {
      alert("You are wrong, try again! Make sure you are looking at all of the links!");
    }
  }
}
