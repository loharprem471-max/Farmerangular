import { Component, inject, OnInit } from '@angular/core';
import { Junction } from '../entities/Junction';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmerjunction',
  standalone: false,
  templateUrl: './farmerjunction.html',
  styleUrl: './farmerjunction.scss',
})
export class Farmerjunction implements OnInit {
  ngOnInit(): void {
    this.getjunction()
  }

  junctionList: Junction[] = []

  private webclient = inject(WebClientService);
  private router = inject(Router)

  getjunction() {
    let fid = Number(localStorage.getItem("id"))
    this.webclient.getdataSingalid(`/getjunction-request/${fid}`).subscribe({
      next: (data: any) => {
        this.junctionList = data
      },
      error(err) {
        alert("not have any junction rents.............")
      },
    })
  }



  deleteHistory(jid: any) {

    this.webclient.deletedata(`/delete-junction/${jid}`).subscribe({
      next: (data) => {
        alert("Junction Deleted ..............")
        this.getjunction()
      },
      error(err) {
        alert("please try later........")
      },
    })
  }
}
