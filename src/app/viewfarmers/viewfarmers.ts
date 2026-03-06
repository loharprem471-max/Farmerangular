import { Component, inject, OnInit, signal } from '@angular/core';
import { Farmer } from '../entities/Farmer';
import { WebClientService } from '../../web-client-service';
import { Loader } from '../loader/loader';
@Component({
  selector: 'app-viewfarmers',
  standalone: false,
  templateUrl: './viewfarmers.html',
  styleUrl: './viewfarmers.scss',
})
export class Viewfarmers implements OnInit {
  ngOnInit(): void {
    this.webclient.isAdminLogedIn()
    this.getfarmers();
  }

  selectedImage: string | null = null;
  farmers = signal<Farmer[]>([]);
  searchTerm = '';
   load:Boolean=false
  farmer = new Farmer();

  private webclient = inject(WebClientService);

  getfarmers() {
    this.load=true
    this.webclient.getdata('/farmer-list/').subscribe({
      next: (data: any) => {
        this.farmers.set(data);
        console.log(data);
        this.load=false
      },
      error(err) {
        alert('no farmers');
        // this.load=false
      },
    });
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }

  blockFarmer(fid: Number, username: string) {
    // this.farmer.status = 0;
    // const formdata = new FormData();
    // formdata.append('status', this.farmer.status.toString());

    this.webclient.getdataSingalid(`/block-farmer/${fid}`).subscribe({
      next: (data: any) => {
        alert(username + 'Blocked Successfully');
        this.getfarmers();
      },
      error(err) {
        alert('Internal Server Error Please Try again..');
      },
    });
  }
}
