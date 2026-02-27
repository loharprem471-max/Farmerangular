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
    this.getproducthistory()
  }


  history=new Bidding();

  private webclient=inject(WebClientService);
  private router=inject(Router)

  getproducthistory()
  {
    this.webclient.getdataSingalid(`/getcustomer-producthistory/${90}`).subscribe({next:(data)=>{
      this.history=data;
    },
    error(err) {
      alert("Not Product History...........")
    },
  })
  }

}
