import { Component, inject, OnInit, signal } from '@angular/core';
import { Junction } from '../entities/Junction';
import { WebClientService } from '../../web-client-service';
import { Subject } from 'rxjs';
import { Loader } from '../loader/loader';

@Component({
  selector: 'app-rentjunction',
  standalone: false,
  templateUrl: './rentjunction.html',
  styleUrl: './rentjunction.scss',
})
export class Rentjunction implements OnInit {
  searchJunction = '';
  junction: Junction[] = [];

  webclient = inject(WebClientService);

  ngOnInit(): void {
    this.webclient.isLogedIn();
    this.getjuctiondata();
  }

  getjuctiondata() {
    this.webclient.getdata('/get-junction').subscribe({
      next: (data: any) => {
        this.junction = data;
        console.log(data);
      },
      error(err) {
        alert('no data found....');
      },
    });
  }



  rentNow(id: any) {
    // this.webclient.postdata('/email-Sending', formdata).subscribe({
    //   next: (data: any) => {
    //     alert('success email');
    //   },
    // });
  }
}
