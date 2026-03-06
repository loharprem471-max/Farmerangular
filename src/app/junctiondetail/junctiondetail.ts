import { Component, inject, OnInit } from '@angular/core';
import { Junction } from '../entities/Junction';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-junctiondetail',
  standalone: false,
  templateUrl: './junctiondetail.html',
  styleUrl: './junctiondetail.scss',
})
export class Junctiondetail implements OnInit {
  ngOnInit(): void {
    this.getdetail()
  }


  junctionList: Junction[] = []

  private webclient = inject(WebClientService)
  private router = inject(Router)

  getdetail() {
    let jid = Number(sessionStorage.getItem("jid"))
    this.webclient.getdataSingalid(`/getjunctionrequest-detail/${jid}`).subscribe({
      next: (data) => {
        this.junctionList = data
      },
      error(err) {
        alert("not any request..........")
      },
    })
  }

  stopJunction(jid: any) {
    console.log(jid)
  }
}
