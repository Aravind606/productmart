import { Component, OnInit } from "@angular/core";
import { ProductDataService } from "../product-data.service";
import { AuthService } from "../../auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Observable<any>;
  constructor(
    private productDataService: ProductDataService,
    private authService: AuthService
  ) {}

  productsData;
  getAllProduct() {
    this.authService.getProduct().subscribe(ProductData => {
      this.productsData = "";
      this.productsData = ProductData;
    });
  }
  ngOnInit() {
    this.getAllProduct();
  }

  getCategoryProduct(category) {
    console.log(category);
    this.authService.categoryProduct(category).subscribe(categoryData => {
      this.productsData = "";
      this.productsData = categoryData;
    });
  }
}
