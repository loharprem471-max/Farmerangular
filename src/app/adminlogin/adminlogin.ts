import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  standalone: false,
  templateUrl: './adminlogin.html',
  styleUrl: './adminlogin.scss',
})
export class Adminlogin {

  username = '';
  password = '';

  private router = inject(Router)
  login() {
    if (this.username === 'admin' && this.password === '123') {
      sessionStorage.setItem('id', '123')
      this.router.navigate(["/admin"])
    } else {
      alert('Invalid Username or Password');
    }
  }
}
