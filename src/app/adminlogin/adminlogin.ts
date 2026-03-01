import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WebClientService } from '../../web-client-service';
@Component({
  selector: 'app-adminlogin',
  standalone: false,
  templateUrl: './adminlogin.html',
  styleUrl: './adminlogin.scss',
})
export class Adminlogin {
  admindata = {
    username: '',
    password: '',
  };
  private webclient = inject(WebClientService);
  private router = inject(Router);
  login() {
    this.webclient.postdata('/admin-login/', this.admindata).subscribe({
      next: (data: any) => {
        localStorage.setItem('aid', data.Aid);
        localStorage.setItem('username', data.Username);
        this.router.navigate(['/admin']);
      },
      error(err) {
        alert('Invalid Username or Password');
      },
    });
  }
}
