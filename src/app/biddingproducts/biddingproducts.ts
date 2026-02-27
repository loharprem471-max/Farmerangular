import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../entities/Products';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';
import { Bidding } from '../entities/Bidding';
import { Product } from '../product/product';

@Component({
  selector: 'app-biddingproducts',
  standalone: false,
  templateUrl: './biddingproducts.html',
  styleUrl: './biddingproducts.scss',
})
export class Biddingproducts  implements OnInit{
  ngOnInit(): void {
    this.getAllproduct()
  }


  products:Products[]=[]
 productItem=''
  private webclient = inject(WebClientService)
  private router = inject(Router)


  getAllproduct() {
    this.webclient.getdata('/get-product/').subscribe({
      next: (data:any) => {
        console.log(data)
        this.products = data
      },
      error(err) {
        alert("Please Try Later.........")
      },
    })
  }

  bidproduct(pid: any) {
    sessionStorage.setItem("pid", pid)
    console.log(pid)
  }
}
