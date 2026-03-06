import { Component, inject, OnInit, signal } from '@angular/core';
import { WebClientService } from '../../web-client-service';
import { Farmer } from '../entities/Farmer';

@Component({
  selector: 'app-newusers',
  standalone: false,
  templateUrl: './newusers.html',
  styleUrl: './newusers.scss',
})
export class Newusers implements OnInit {
  ngOnInit(): void {
    this.webclient.isAdminLogedIn();
    this.getfarmers();
  }
  selectedImage: string | null = null;
  farmers = signal<Farmer[]>([]);
  searchTerm = '';
  farmer = new Farmer();

  private webclient = inject(WebClientService);

  getfarmers() {
    this.webclient.getdata('/farmer-list/').subscribe({
      next: (data: any) => {
        console.log(data)
        this.farmers.set(data);
      },
      error(err) {
        alert('no farmers');
      },
    });
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }

  approve(id: Number, username: string) {
    this.webclient.getdataSingalid(`/email-Sending-farmer/${id}`).subscribe({
      next: (data) => {
        alert(username + 'allowed entry in Farmer-Connect..');
        this.getfarmers();
      },
      error(err) {
        alert('Something is wrong Please Try again..');
      },
    });
  }
}
