import { Component, inject, OnInit, signal } from '@angular/core';
import { Bidding } from '../entities/Bidding';
import { FormsModule } from '@angular/forms';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bid-value',
  standalone: false,
  templateUrl: './bid-value.html',
  styleUrl: './bid-value.scss',
})
export class BidValue implements OnInit {
  ngOnInit(): void {

    this.getBiddingvalue()
  }


  newBidValue: number = 0;
  bidvalue = new Bidding()

  private webclient = inject(WebClientService)
  private router = inject(Router)

  getBiddingvalue() {
    let Bid = sessionStorage.getItem("bid")
    this.webclient.getdataSingalid(`/getold-bidvalue/${Bid}`).subscribe({
      next: (data) => {
        console.log(data)
        this.bidvalue = data
        this.newBidValue = data.biddingPrice
      },
      error(err) {
        alert("Newtwork issue Please try later...........")
      },
    })
  }


  placeBid(bid: number) {

    console.log(this.bidvalue)

    this.webclient.putdata(`/replace-bidvalue/${bid}`, this.bidvalue).subscribe({
      next: (data) => {
        alert(`Bid Relaced Successfully with ${data.biddingPrice} Rupees...............`)
      },
      error(err) {
        alert("Bidding Trafic Pleade Bidding Value Again........")
      },
    })
  }
}
