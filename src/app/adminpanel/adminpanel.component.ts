import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-adminpanel",
  templateUrl: "./adminpanel.component.html",
  styleUrls: ["./adminpanel.component.css"]
})
export class AdminpanelComponent implements OnInit {
  constructor(private authService: AuthService) {}

  products;
  productId;
  categories = [{ type: "kids" }, { type: "men" }, { type: "women" }];

  Product = new FormGroup({
    category: new FormControl(this.categories[3]),
    productName: new FormControl(),
    imageUrl: new FormControl(),
    price: new FormControl()
  });

  getProductData() {
    this.authService.getProduct().subscribe(ProductData => {
      this.products = ProductData;
      this.Product.setValue({
        category: "",
        productName: "",
        imageUrl: "",
        price: ""
      });
    });
  }

  addProductData() {
    const addData = this.Product.value;
    this.authService.addProduct(addData).subscribe(s => {
      //console.log("Added successful");
      this.getProductData();
    });
  }
  update(category, productName, imageUrl, price, id) {
    this.productId = id;
    this.Product.setValue({
      category: category,
      productName: productName,
      imageUrl: imageUrl,
      price: price
    });
    window.scroll(0, 0);
  }
  changecss() {}
  ngOnInit() {
    this.getProductData();
  }

  updateProductData() {
    const updateProduct = this.Product.value;
    this.authService
      .updateProduct(updateProduct, this.productId)
      .subscribe(s => {
        //console.log("updated successful");
        this.getProductData();
      });
  }

  deleteProductData(id) {
    this.authService.deleteProduct(id).subscribe(s => {
      //console.log("deleted successful");
      this.getProductData();
    });
  }
}
