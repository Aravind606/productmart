import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AdminpanelComponent } from "./adminpanel/adminpanel.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "adminpanel",
    component: AdminpanelComponent
  },
  {
    path: "products",
    loadChildren: "./products/products.module#ProductsModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
