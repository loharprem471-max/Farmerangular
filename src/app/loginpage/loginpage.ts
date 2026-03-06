import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WebClientService } from '../../web-client-service';

@Component({
  selector: 'app-loginpage',
  standalone: false,
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.scss',
})
export class Loginpage {
  username: string = '';
  password: string = '';
  role: string = '';
  loginError: string = '';

  private router = inject(Router);
  private webclient = inject(WebClientService);
  login(form: NgForm) {
    this.loginError = '';

    if (form.valid) {
      const formdata = new FormData();
      (formdata.append('username', this.username), 
      formdata.append('password', this.password));

      if (this.role === 'farmer') {
        this.webclient.getdataByid('/farmer-login/', formdata).subscribe({
          next: (data: any) => {
            // if (this.username === data.username && this.password === data.password) {
            localStorage.setItem('id', data.fid);
            localStorage.setItem('username', data.username);
            console.log(data);
            if (data.status === 1) {
              this.router.navigate(['/farmerhomepage']);
            } else {
              alert(
                `dear user ${data.username} admin not approvel your reuest please contact to the admin`,
              );
              form.resetForm();
              this.router.navigate(['/startfarmer']);
            }

            // }
            // else {
            //   this.loginError = "Username or password doesn't match";

            // }
          },
          error(err) {
            alert("Username or password doesn't match");
          },
        });
      }

      if (this.role === 'customer') {
        this.webclient.getdataByid('/customer-login', formdata).subscribe({
          next: (data: any) => {
            // if (this.username === data.username && this.password === this.password) {
            localStorage.setItem('id', data.cid);
            localStorage.setItem('username', data.username);
            if (data.status === 1) {
              this.router.navigate(['/customerhomepage']);
            } else {
              alert(
                `dear user ${data.username} admin not approvel your reuest please contact to the admin`,
              );
              form.resetForm();
              this.router.navigate(['/startfarmer']);
            }
            // }
          },
          error(err) {
            alert("Username or password doesn't match");
          },
        });
      }
    } else {
      form.control.markAllAsTouched();
    }
  }
}
