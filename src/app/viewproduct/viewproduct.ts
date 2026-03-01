import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../entities/Products';
import { WebClientService } from '../../web-client-service';
import { Bidding } from '../entities/Bidding';

@Component({
  selector: 'app-viewproduct',
  standalone: false,
  templateUrl: './viewproduct.html',
  styleUrl: './viewproduct.scss',
})
export class Viewproduct implements OnInit{
  ngOnInit(): void {
    this.webclient.isAdminLogedIn()
    this.displayproduct()
  }

  productItem=''
  products:Products[]=[];

  private webclient = inject(WebClientService);

  displayproduct() {
    this.webclient.getdata('/get-product/').subscribe({
      next: (data:any) => {
        this.products = data;
      }
    })
  }
}
