import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-farmer-navbar',
  standalone: false,
  templateUrl: './farmer-navbar.html',
  styleUrl: './farmer-navbar.scss',
})
export class FarmerNavbar {


  private router = inject(Router)

  menuOpen = false;
  openDropdown: 'bidding' | 'junction' | 'management' | 'account' | null = null;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) this.openDropdown = null;
  }

  toggleDropdown(name: 'bidding' | 'junction' | 'management' | 'account') {
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
