import { Component, inject, OnInit } from '@angular/core';
import { WebClientService } from '../../web-client-service';

@Component({
  selector: 'app-customerabout',
  standalone: false,
  templateUrl: './customerabout.html',
  styleUrl: './customerabout.scss',
})
export class Customerabout implements OnInit {
  private webclient = inject(WebClientService);
  ngOnInit(): void {
    this.webclient.isLogedIn();
  }
}
