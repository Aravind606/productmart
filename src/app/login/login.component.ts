import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  login() {
    this.error = "";
    this.authService.login(this.email, this.password).subscribe(
      s => {
        if (s == null) {
          this.error = "Please Enter a Valid Password"
        }
        else {
          this.router.navigate(["adminpanel"])
        }

      },
      e => {
        this.error = e;
      }
    );
  }
}
