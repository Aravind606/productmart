import { Injectable } from "@angular/core";
import { of, Subject, throwError } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private apiUrl = "api/auth/";
  private adminUrl = "api/admin/";
  private userUrl = "api/users/";

  constructor(private httpClient: HttpClient) {}

  //login api call
  login(email: string, password: string) {
    const loginCredentials = { email, password };

    return this.httpClient
      .post<User>(`${this.apiUrl}login`, loginCredentials)
      .pipe(
        switchMap(foundUser => {
          return of(foundUser);
        }),
        catchError(e => {
          console.log(`login failed`, e);
          return throwError("user does not exists");
        })
      );
  }

  //register new user data
  register(user: any) {
    return this.httpClient.post<User>(`${this.apiUrl}register`, user).pipe(
      switchMap(savedUser => {
        return of(savedUser);
      }),
      catchError(e => {
        //console.log(`server error occured`, e);
        return throwError("Registration failed");
      })
    );
  }

  //store products in db
  addProduct(data) {
    return this.httpClient.post(`${this.adminUrl}addproduct`, data).pipe(
      switchMap(addedData => {
        return of(addedData);
      }),
      catchError(e => {
        console.log(`server error occured`, e);
        return throwError("Error occured while adding new product try again");
      })
    );
  }

  //retrieving all products
  getProduct() {
    return this.httpClient.get(`${this.userUrl}getproduct`).pipe(
      switchMap(addedData => {
        return of(addedData);
      }),
      catchError(e => {
        console.log(`server error occured`, e);
        return throwError("Error occured while retriveing products try again");
      })
    );
  }

  //retrieving category wise products
  categoryProduct(category) {
    return this.httpClient
      .get(`${this.userUrl}categoryproduct/${category}`)
      .pipe(
        switchMap(addedData => {
          return of(addedData);
        }),
        catchError(e => {
          console.log(`server error occured`, e);
          return throwError(
            "Error occured while retriveing category product try again"
          );
        })
      );
  }

  //update existing product details
  updateProduct(updateData, id) {
    return this.httpClient
      .put(`${this.adminUrl}updateproduct/${id}`, updateData)
      .pipe(
        switchMap(addedData => {
          return of(addedData);
        }),
        catchError(e => {
          console.log(`server error occured`, e);
          return throwError(
            "Error occured while updating existing product try again"
          );
        })
      );
  }

  //remove the existing product
  deleteProduct(id) {
    return this.httpClient.delete(`${this.adminUrl}deleteproduct/${id}`).pipe(
      switchMap(addedData => {
        return of(addedData);
      }),
      catchError(e => {
        console.log(`server error occured`, e);
        return throwError("Error occured while removing product try again");
      })
    );
  }
}
