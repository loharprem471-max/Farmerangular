import { Component, inject, OnInit } from '@angular/core';
import { BidValue } from '../bid-value/bid-value';
import { Products } from '../entities/Products';
import { Bidding } from '../entities/Bidding';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerproducthistory',
  standalone: false,
  templateUrl: './customerproducthistory.html',
  styleUrl: './customerproducthistory.scss',
})
export class Customerproducthistory implements OnInit {
  ngOnInit(): void {
    this.webclient.isLogedIn()
    this.getproducthistory()
  }


  history = new Bidding();

  private webclient = inject(WebClientService);
  private router = inject(Router)

  getproducthistory() {
    let pid = Number(sessionStorage.getItem("pid"))
    this.webclient.getdataSingalid(`/getcustomer-producthistory/${pid}`).subscribe({
      next: (data) => {
        this.history = data;
      },
      error(err) {
        alert("Not Product History...........")
      },
    })
  }

}
