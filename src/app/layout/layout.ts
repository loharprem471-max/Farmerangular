import { Component, inject, OnInit } from '@angular/core';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {
  isSidebarClosed = false;

  private webclient = inject(WebClientService);
  private router = inject(Router);

  constructor() {
    if (window.innerWidth <= 768) {
      this.isSidebarClosed = true;
    }
  }
  ngOnInit(): void {
    this.webclient.isAdminLogedIn()
    this.webclient.isAdminLogedIn();
  }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  closeSidebar() {
    if (window.innerWidth <= 768) {
      this.isSidebarClosed = true;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/adminlgoin']);
  }
}
