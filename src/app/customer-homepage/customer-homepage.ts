import { Component, OnInit } from '@angular/core';
import { WebClientService } from '../../web-client-service';

@Component({
  selector: 'app-customer-homepage',
  standalone: false,
  templateUrl: './customer-homepage.html',
  styleUrl: './customer-homepage.scss',
})
export class CustomerHomepage  {
  constructor(private webclient:WebClientService ){}
  ngOnInit(): void {

    this.webclient.isLogedIn()
  }

}
