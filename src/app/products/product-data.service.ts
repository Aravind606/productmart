import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductDataService {
  constructor(private httpClient: HttpClient) {}

  // getAllProducts() {
  //   return this.httpClient
  //     .post(`${this.apiUrl}allproducts`, { user: "data" })
  //     .pipe(
  //       switchMap(allProducts => {
  //         console.log("return process");
  //         return of(allProducts);
  //       }),
  //       catchError(e => {
  //         console.log(`server error occured`, e);
  //         return throwError("Error occured while adding new product try again");
  //       })
  //     );
  // }
}
