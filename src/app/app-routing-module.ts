import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerNavbar } from './farmer-navbar/farmer-navbar';
import { CustomerNavbar } from './customer-navbar/customer-navbar';
import { Loginpage } from './loginpage/loginpage';
import { AdminNavbar } from './admin-navbar/admin-navbar';
import { FarmerHomepage } from './farmer-homepage/farmer-homepage';
import { CustomerHomepage } from './customer-homepage/customer-homepage';
import { Aboutus } from './aboutus/aboutus';
import { FarmerRegister } from './farmer-register/farmer-register';
import { Startfarmer } from './startfarmer/startfarmer';
import { Viewfarmers } from './viewfarmers/viewfarmers';
import { Testing } from './testing/testing';
import { Layout } from './layout/layout';
import { Viewcustomers } from './viewcustomers/viewcustomers';
import { Dashboard } from './dashboard/dashboard';
import { Addproduct } from './addproduct/addproduct';
const routes: Routes = [


  // {path:"",component:Layout},
  { path: "faremrnavbar", component: FarmerNavbar },
  { path: "login", component: Loginpage },
  { path: "customernavbar", component: CustomerNavbar },
  { path: "farmerhomepage", component: FarmerHomepage },
  { path: "customerhomepage", component: CustomerHomepage },
  { path: "aboutus", component: Aboutus },
  { path: "farmerregister", component: FarmerRegister },
  { path: "startfarmer", component: Startfarmer },
  { path: "viewfarmers", component: Viewfarmers },
  { path: "viewcustomer", component: Viewcustomers },
  { path: "testing", component: Testing },
  { path: "product", component: Addproduct },
  // {path:"dashboard",component:Dashboard},

  {
    path: "admin",
    component: Layout,
    children: [

      {
        path: "dashboard",
        component: Dashboard,
      },
      {
        path: "",
        component: Dashboard,

      },
      {
        path: "viewfarmers",
        component: Viewfarmers
      },
      {
        path: "viewcustomer",
        component: Viewcustomers
      }
    ]
  },

  {
    path: "admin",
    loadChildren: () => import('./layout/layout').then(m => m.Layout)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
