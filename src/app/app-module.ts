import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FarmerNavbar } from './farmer-navbar/farmer-navbar';
import { CustomerNavbar } from './customer-navbar/customer-navbar';
import { FarmerHomepage } from './farmer-homepage/farmer-homepage';
import { CustomerHomepage } from './customer-homepage/customer-homepage';
import { FarmerRegister } from './farmer-register/farmer-register';
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
import { FilterPipe } from './pipes/filter-pipe';
import { Product } from './product/product';
import { Adminlogin } from './adminlogin/adminlogin';
import { Account } from './account/account';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Newusers } from './newusers/newusers';
import { Newcustomers } from './newcustomers/newcustomers';
import { Viewproduct } from './viewproduct/viewproduct';
import { Addjunction } from './addjunction/addjunction';
import { Customeraccount } from './customeraccount/customeraccount';
import { Rentjunction } from './rentjunction/rentjunction';
import { Wasteadd } from './wasteadd/wasteadd';
import { Customerabout } from './customerabout/customerabout';
import { Messages } from './messages/messages';
import { Loader } from './loader/loader';
import { Verifyemail } from './verifyemail/verifyemail';
import { Otpverify } from './otpverify/otpverify';
import { Changepassword } from './changepassword/changepassword';
import { Cutomerpendingbid } from './cutomerpendingbid/cutomerpendingbid';
import { BidValue } from './bid-value/bid-value';
import { Farmerbidrequest } from './farmerbidrequest/farmerbidrequest';
import { Biddingend } from './biddingend/biddingend';
import { Farmerhistory } from './farmerhistory/farmerhistory';
import { Farmerproducthistory } from './farmerproducthistory/farmerproducthistory';
import { Customerhistory } from './customerhistory/customerhistory';
import { Customerproducthistory } from './customerproducthistory/customerproducthistory';
import { Biddingproducts } from './biddingproducts/biddingproducts';
import { FirstbidValue } from './firstbid-value/firstbid-value';
import { JunctionfilterPipe } from './pipes/junctionfilter-pipe';
import { ProductfilterPipe } from './product/productfilter-pipe';
import { Customerfooter } from './customerfooter/customerfooter';
import { CustomerfilterPipe } from './pipes/customerfilter-pipe';

@NgModule({
  declarations: [
    App,
    FarmerNavbar,
    CustomerNavbar,
    FarmerHomepage,
    CustomerHomepage,
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
    FilterPipe,
    Product,
    Adminlogin,
    Account,
    Newusers,
    Newcustomers,
    Viewproduct,
    Addjunction,
    Customeraccount,
    Rentjunction,
    Wasteadd,
    Customerabout,
    Messages,
    Loader,
    Verifyemail,
    Otpverify,
    Changepassword,
    Cutomerpendingbid,
    BidValue,
    Farmerbidrequest,
    Biddingend,
    Farmerhistory,
    Farmerproducthistory,
    Customerhistory,
    Customerproducthistory,
    Biddingproducts,
    FirstbidValue,
    JunctionfilterPipe,
    ProductfilterPipe,
    Customerfooter,
    CustomerfilterPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgOptimizedImage
],
  providers: [
    provideBrowserGlobalErrorListeners(),

  ],
  bootstrap: [App]
})
export class AppModule { }

