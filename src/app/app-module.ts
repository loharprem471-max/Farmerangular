import { ModuleWithProviders, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FarmerNavbar } from './farmer-navbar/farmer-navbar';
import { CustomerNavbar } from './customer-navbar/customer-navbar';
import { AdminNavbar } from './admin-navbar/admin-navbar';
import { FarmerHomepage } from './farmer-homepage/farmer-homepage';
import { CustomerHomepage } from './customer-homepage/customer-homepage';
import { AdminHomepage } from './admin-homepage/admin-homepage';
import { FarmerRegister } from './farmer-register/farmer-register';
import { HttpClient } from '@angular/common/http';
import { Aboutus } from './aboutus/aboutus';
import { Startfarmer } from './startfarmer/startfarmer';
import { Advertisment } from './advertisment/advertisment';
import { Footer } from './footer/footer';
import { Viewfarmers } from './viewfarmers/viewfarmers';
import { Viewcustomers } from './viewcustomers/viewcustomers';
import { Loginpage } from './loginpage/loginpage';
import { Sample } from './sample/sample';
import { Testing } from './testing/testing';
import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';
import { Addproduct } from './addproduct/addproduct';

@NgModule({
  declarations: [
    App,
    FarmerNavbar,
    CustomerNavbar,
    AdminNavbar,
    FarmerHomepage,
    CustomerHomepage,
    AdminHomepage,
    FarmerRegister,
    Aboutus,
    Startfarmer,
    Advertisment,
    Footer,
    Viewfarmers,
    Viewcustomers,
    Loginpage,
    Sample,
    Testing,
    Layout,
    Dashboard,
    Addproduct,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),

  ],
  bootstrap: [App]
})
export class AppModule { }
// function importProvidersFrom(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
//   throw new Error('Function not implemented.');
// }

