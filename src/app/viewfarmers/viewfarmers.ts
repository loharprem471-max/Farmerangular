import { Component, inject, OnInit, signal } from '@angular/core';
import { Farmer } from '../entities/Farmer';
import { WebClientService } from '../../web-client-service';

@Component({
  selector: 'app-viewfarmers',
  standalone: false,
  templateUrl: './viewfarmers.html',
  styleUrl: './viewfarmers.scss',
})
export class Viewfarmers implements OnInit {

  ngOnInit(): void {
    this.getfarmers()
  }

  farmers=signal<Farmer[]>([]);

  private webclient = inject(WebClientService);

  getfarmers() {
    this.webclient.getdata('/farmer-list').subscribe((data:any) => {
      this.farmers.set(data);
      console.log(data);
    },
      (error) => {
        console.log("wrong")
      }
    )
  }


  blockFarmer() {

  }
  unblockFarmer() {

  }
}
