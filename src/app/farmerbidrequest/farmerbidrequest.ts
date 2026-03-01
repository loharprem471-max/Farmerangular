import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { Products } from '../entities/Products';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmerbidrequest',
  standalone: false,
  templateUrl: './farmerbidrequest.html',
  styleUrl: './farmerbidrequest.scss',
})
export class Farmerbidrequest implements OnInit {
  ngOnInit(): void {
    this.webclient.isLogedIn()
    this.getproductlist()
  }

  productlist: Products[] = []

  private webclient = inject(WebClientService)
  private router = inject(Router)

  getproductlist() {
    let fid = sessionStorage.getItem('id')
    this.webclient.getdataSingalid(`/getfarmer-product/${fid}`).subscribe({
      next: (data) => {
        this.productlist = data;
      },
      error(err) {
        alert('not have any bidding request.........')
      },
    })
  }

  nextpage(pid: any) {
    sessionStorage.setItem("pid", pid)
    this.router.navigate(["/biddingend"])
  }
}
