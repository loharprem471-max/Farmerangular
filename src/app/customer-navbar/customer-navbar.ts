import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-navbar',
  standalone: false,
  templateUrl: './customer-navbar.html',
  styleUrl: './customer-navbar.scss',
})
export class CustomerNavbar {



  private router = inject(Router)
  //   menuOpen = false;

  // toggleMenu(): void {
  //   this.menuOpen = !this.menuOpen;
  // }

  // closeAll(): void {
  //   this.menuOpen = false;
  // }




  menuOpen = false;
  openDropdown: 'account' | null = null;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) this.openDropdown = null;
  }

  toggleDropdown(name: 'account') {
    this.openDropdown = this.openDropdown === name ? null : name;
  }


  closeAll() {
    this.menuOpen = false;
    this.openDropdown = null;
  }


  logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
