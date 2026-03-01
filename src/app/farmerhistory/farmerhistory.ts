import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../entities/Products';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmerhistory',
  standalone: false,
  templateUrl: './farmerhistory.html',
  styleUrl: './farmerhistory.scss',
})
export class Farmerhistory implements OnInit {
  ngOnInit(): void {
    this.webclient.isLogedIn()
    this.gethistory()
  }

  farmerHistoryList: Products[] = []

  private webclient = inject(WebClientService)
  private router = inject(Router)

  gethistory() {
    let fid = localStorage.getItem("fid")
    this.webclient.getdataSingalid(`/getfarmer-history/${fid}`).subscribe({
      next: (data) => {
        this.farmerHistoryList = data;
      },
      error(err) {
        alert("no any bidding history..")
      },
    })
  }

  producthistory(pid: any) {
    sessionStorage.setItem("pid", pid)
    this.router.navigate(['/farmerproducthistory'])
  }
}
