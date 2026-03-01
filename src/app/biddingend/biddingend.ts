import { Component, inject, OnInit } from '@angular/core';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';
import { Bidding } from '../entities/Bidding';
import { Products } from '../entities/Products';

@Component({
  selector: 'app-biddingend',
  standalone: false,
  templateUrl: './biddingend.html',
  styleUrl: './biddingend.scss',
})
export class Biddingend implements OnInit {
  ngOnInit(): void {
    this.webclient.isLogedIn()
    this.getbiddingValue()
  }

  bidlist: Bidding[] = [];

  private webclient = inject(WebClientService)
  private router = inject(Router)

  getbiddingValue() {
    let pid = sessionStorage.getItem("pid")
    this.webclient.getdataSingalid(`/get-placedvalue/${pid}`).subscribe({
      next: (data: Bidding[]) => {
        this.bidlist = data.sort((a, b) => b.biddingPrice - a.biddingPrice);
      },
      error(err) {
        alert("not have any bid values...........")
        let router = inject(Router)
        // router.navigate(['/farmerhomepage'])
      },
    })
  }

  acceptBid(bid: any, name: any) {
    this.webclient.getdataSingalid(`/endbidding-process/${bid}`).subscribe({
      next: (data) => {
        alert(`your accepted the ${name} now check on email sended the bid confirmation ..........`)
        this.router.navigate(['/farmerbidrequest'])
      },
      error(err) {
        alert("Oops please try again .........")
      },
    })
  }

  rejectBid(bid: any, name: any) {

    this.webclient.deletedata(`/rejectbid-value/${bid}`).subscribe({
      next: (data: any) => {
        console.log(data)
        alert(`your are rejected customer ${name} bid request.........`)
        this.getbiddingValue()

      },
      error(err) {
        console.log(err)
        alert(err + " try later .......")
      },
    })

  }
}
