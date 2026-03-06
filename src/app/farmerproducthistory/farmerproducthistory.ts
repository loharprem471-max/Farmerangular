import { Component, inject, OnInit } from '@angular/core';
import { Bidding } from '../entities/Bidding';
import { Products } from '../entities/Products';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';
import { BidValue } from '../bid-value/bid-value';

@Component({
  selector: 'app-farmerproducthistory',
  standalone: false,
  templateUrl: './farmerproducthistory.html',
  styleUrl: './farmerproducthistory.scss',
})
export class Farmerproducthistory implements OnInit {
  ngOnInit(): void {
    this.wbclient.isLogedIn();
    this.getproducthistory();
  }

  history = new Bidding();

  private wbclient = inject(WebClientService);
  private router = inject(Router);

  getproducthistory() {
    let pid = Number(sessionStorage.getItem('pid'));
    this.wbclient.getdataSingalid(`/getfarmer-producthistory/${pid}`).subscribe({
      next: (data: any) => {
        console.log(data);
        this.history = data;
      },
      error(err) {
        alert('something is wrong please try later...........');
      },
    });
  }
}
