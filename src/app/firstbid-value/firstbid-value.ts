import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WebClientService } from '../../web-client-service';
import { Bidding } from '../entities/Bidding';
import { FormsModule } from '@angular/forms';
import { Products } from '../entities/Products';

@Component({
  selector: 'app-firstbid-value',
  standalone: false,
  templateUrl: './firstbid-value.html',
  styleUrl: './firstbid-value.scss',
})
export class FirstbidValue {
  ngOnInit(): void {
    this.webclient.isLogedIn();
    this.getBiddingvalue();
  }

  newBidValue: number = 0;
  bidvalue = new Bidding();

  private webclient = inject(WebClientService);
  private router = inject(Router);

  getBiddingvalue() {
    let pid = sessionStorage.getItem('pid');
    this.webclient.getdataSingalid(`/get-product/${pid}`).subscribe({
      next: (data) => {
        console.log(data);
        this.bidvalue = data;
        this.newBidValue = data.price;
      },
      error(err) {
        alert('Newtwork issue Please try later...........');
      },
    });
  }

  // placeBid(bid: number) {

  //   console.log(this.bidvalue)

  //   this.webclient.putdata(`/replace-bidvalue/${bid}`, this.bidvalue).subscribe({
  //     next: (data) => {
  //       alert(`Bid Relaced Successfully with ${data.biddingPrice} Rupees...............`)
  //     },
  //     error(err) {
  //       alert("Bidding Trafic Pleade Bidding Value Again........")
  //     },
  //   })
  // }

  placeBid(productid: any) {
    let cid = Number(localStorage.getItem("id"));
    let pid = Number(sessionStorage.getItem('pid'));

    this.bidvalue.customerId = cid;
    this.bidvalue.productId = pid;

    console.log('session pid' + pid);
    console.log('data' + this.bidvalue);
    console.log('cid' + this.bidvalue.customerId);
    console.log(this.bidvalue.price);

    this.webclient.postdata('/bidding-value', this.bidvalue).subscribe({
      next: (data) => {
        console.log(data);
        alert(`your successfully bid ${this.bidvalue.price} on ${this.bidvalue.productName}`);
        this.router.navigate(["/pendingbid"])
      },
      error(err) {
        alert('please Try again.............');
      },
    });
  }
}
