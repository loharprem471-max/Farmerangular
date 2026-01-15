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


  constructor(private router: Router) { }
  private webclient = inject(WebClientService)
  login(form: NgForm) {
    this.loginError = '';

    if (form.valid) {

      const formdata = new FormData();
      formdata.append('username', this.username),
        formdata.append('password', this.password)

      if (this.role === 'farmer') {

        this.webclient.getdataByid('/farmer-login', formdata).subscribe({
          next: (data: any) => {
            console.log(data.fid)
            if (this.username === data.username && this.password === data.password) {
              sessionStorage.setItem("id", data.fid)
              sessionStorage.setItem("username", data.username)
              this.router.navigate(['/farmerhomepage']);
              form.resetForm();

            }
            else {
              this.loginError = "Username or password doesn't match";

            }
          },
          error(err) {
            alert(err.username + "not exit")
          },
        })

      }

      // if (this.role === 'customer') {
      //   this.webclient.getdataByid('/customer-login', formdata).subscribe((data: any) => {
      //     // if (data && data.username) {
      //     // if (this.username === data.username && this.password === data.password) {
      //     //   sessionStorage.setItem("id", data.cid);
      //     //   sessionStorage.setItem("username", data.username);
      //     //   this.router.navigate(['/customerhomepage']);
      //     //   form.resetForm();
      //     // }
      //     // }
      //     // else {
      //     //   this.loginError = "Username or password doesn't match";

      //     // }
      //     // },
      //     // (error)=>{
      //     //   alert(this.username + "not exit in customers")
      //     // }
      //     // )
      //   }
      // }

      if (this.role === 'customer') {
        this.webclient.getdataByid('/customer-login', formdata).subscribe({
          next: (data: any) => {

            if (this.username === data.username && this.password === this.password) {
              console.log(data)
              sessionStorage.setItem("id", data.cid)
              sessionStorage.setItem("username", data.username)
              this.router.navigate(['/customerhomepage'])
              form.resetForm()
            }
          },
          error(err) {
            alert(err.username + "not exit")
          },
        })
      }
    } else {
      form.control.markAllAsTouched();
    }
  }
}
