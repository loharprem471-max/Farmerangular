import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

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
