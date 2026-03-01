import { Component, inject, OnInit, signal } from '@angular/core';
import { Farmer } from '../entities/Farmer';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';
import { Customer } from '../entities/Customer';

@Component({
  selector: 'app-viewcustomers',
  standalone: false,
  templateUrl: './viewcustomers.html',
  styleUrl: './viewcustomers.scss',
  // template:`<button class="btn block" (click)="blockCustomer( )">Block</button>`
})
export class Viewcustomers implements OnInit {
  customers: Customer[] = [];

  farmer: Farmer[] = [];

  loader:any
  selectedImage: string | null = null;
  customer = '';
  constructor(private router: Router) {}
  // private toastr=inject(ToastrService)
  ngOnInit(): void {
    this.webclient.isAdminLogedIn()
    this.getCustomers();
  }
  private webclient = inject(WebClientService);

  // geuserbyid() {

  //   const formdata = new FormData();

  //   formdata.append('username', this.username.trim()),
  //     formdata.append('password', this.password.trim())

  //   return this.webclient.getdataByid('/farmer-login', formdata).subscribe((data: any) => {

  //     console.log(data);
  //     this.farmer = data;
  //     this.router.navigateByUrl('/faremrnavbar')
  //   })
  // }

  getCustomers() {
    return this.webclient.getdata('/get-customer').subscribe((data: any) => {
      console.log(data);
      this.customers = data;
    });
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }

  blockCustomer(cid: any, username: string) {
    // const formdata = new FormData();
    // formdata.append('email', email);

    return this.webclient.getdataSingalid(`/block-customer/${cid}`).subscribe({
      next: (data: any) => {
        alert(` user ${username} Blocked Successfully...`);
        this.getCustomers();
      },
      error(err) {
        alert('Internal Server Error Please Try Later............');
      },
    });
  }
}
