import { Component } from '@angular/core';
import { Farmer } from '../entities/Farmer';

@Component({
  selector: 'app-admin-homepage',
  standalone: false,
  templateUrl: './admin-homepage.html',
  styleUrl: './admin-homepage.scss',
})
export class AdminHomepage {

  farmer:Farmer[]=[];


  // isSidebarClosed = false;

  // toggleSidebar() {
  //   this.isSidebarClosed = !this.isSidebarClosed;
  // }

  // closeSidebar() {
  //   if (window.innerWidth <= 768) {
  //     this.isSidebarClosed = true;
  //   }
  // }


  isSidebarClosed = false;

  constructor() {
    if (window.innerWidth <= 768) {
      this.isSidebarClosed = true;
    }
  }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  closeSidebar() {
    if (window.innerWidth <= 768) {
      this.isSidebarClosed = true;
    }
  }


}
