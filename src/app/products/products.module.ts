import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products/products.component";
import { ProductDataService } from "./product-data.service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [ProductDataService]
})
export class ProductsModule { }
