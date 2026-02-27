import { Component, inject, OnInit } from '@angular/core';
import { WebClientService } from '../../web-client-service';

@Component({
  selector: 'app-farmer-homepage',
  standalone: false,
  templateUrl: './farmer-homepage.html',
  styleUrl: './farmer-homepage.scss',
})
export class FarmerHomepage implements OnInit{
  
private webclent=inject(WebClientService) 
  ngOnInit(): void {
    this.webclent.isLogedIn()
  }

}
