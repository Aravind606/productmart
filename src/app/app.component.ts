import { Component, OnDestroy } from "@angular/core";
import { AuthService, User } from "./auth.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnDestroy {
  title = "product-mart";
  userSubscription = Subscription;
  user: User;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnDestroy(): void {
    if (this.userSubscription) {
      //this.userSubscription.unsubscribe();
    }
  }
}
