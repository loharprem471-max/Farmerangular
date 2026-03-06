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

  junctiondata = {
    farmerId: '',
    junctionid: '',
  }

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



  rentNow(jid: any) {
    let fid = localStorage.getItem("id")
    // if (fid != null) {
    //   this.junctiondata.farmerId = fid;
    //   this.junctiondata.junctionid = jid;
    // }
    // else {
    //   alert("please Try again...")
    // }

    const junctiondata = new FormData();

    if (fid != null) {
      junctiondata.append('farmerId', fid)
      junctiondata.append('jid', jid)
    }
    this.webclient.postdata('/rent-junction/', junctiondata).subscribe({
      next: (data) => {
        alert("Junction rented cheack the whats app for confirmation....")
      },
      error(err) {
        alert("please try again.........")
      },
    })
  }
}
