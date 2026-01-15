import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

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
