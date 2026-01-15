import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  standalone: false,
  templateUrl: './admin-navbar.html',
  styleUrl: './admin-navbar.scss',
})
export class AdminNavbar {

  menuOpen = false;

toggleMenu(): void {
  this.menuOpen = !this.menuOpen;
}

closeAll(): void {
  this.menuOpen = false;
}



}
