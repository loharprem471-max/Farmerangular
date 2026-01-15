import { Component } from '@angular/core';
@Component({
  selector: 'app-farmer-navbar',
  standalone: false,
  templateUrl: './farmer-navbar.html',
  styleUrl: './farmer-navbar.scss',
})
export class FarmerNavbar {


  menuOpen = false;
  openDropdown: 'bidding' | 'junction' |'management' | null = null;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) this.openDropdown = null;
  }

  toggleDropdown(name: 'bidding' | 'junction' | 'management') {
    this.openDropdown = this.openDropdown === name ? null : name;
  }
  
  
  closeAll() {
    this.menuOpen = false;
    this.openDropdown = null;
  }
}
