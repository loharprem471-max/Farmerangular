import { Component, inject, OnInit } from '@angular/core';
import { WebClientService } from '../../web-client-service';

@Component({
  selector: 'app-aboutus',
  standalone: false,
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.scss',
})
export class Aboutus implements OnInit {
private webclient=inject(WebClientService)
  ngOnInit(): void {
    this.webclient.isLogedIn()
}



}
