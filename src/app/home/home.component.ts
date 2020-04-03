import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }
  products;
  getProductData() {
    this.authService
      .getProduct()
      .subscribe(ProductData => {
        console.log(ProductData)
        this.products = ProductData;
      });
  }

  ngOnInit() {
    this.getProductData();
  }

}
