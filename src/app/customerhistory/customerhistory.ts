import { Component, inject, OnInit } from '@angular/core';
import { Bidding } from '../entities/Bidding';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerhistory',
  standalone: false,
  templateUrl: './customerhistory.html',
  styleUrl: './customerhistory.scss',
})
export class Customerhistory implements OnInit {
  ngOnInit(): void {
    this.webclient.isLogedIn();
    this.gethistory();
  }

  customerhistorylist: Bidding[] | any;

  private webclient = inject(WebClientService);
  private router = inject(Router);

  gethistory() {
    let cid=Number(localStorage.getItem("id"))
    this.webclient.getdataSingalid(`/getcustomer-history/${cid}`).subscribe({
      next: (data) => {
        console.log(data);
        this.customerhistorylist = data;
      },
      error(err) {
        alert('Not having any Bidding History...');
      },
    });
  }

  producthistory(pid: any) {
    sessionStorage.setItem('pid', pid);
    this.router.navigate(['/customerprohistory']);
  }
}
