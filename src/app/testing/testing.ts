import { Component, inject } from '@angular/core';
import { Farmer } from '../entities/Farmer';
import { WebClientService } from '../../web-client-service';

@Component({
  selector: 'app-testing',
  standalone: false,
  templateUrl: './testing.html',
  styleUrl: './testing.scss',
})
export class Testing {

    farmer:Farmer[]=[];
  
  private  webclient=inject(WebClientService);

  displaydata()
  {
    //   this.webclient.getdata("/farmer-list").subscribe((data:any): void=>{
    //     this.farmer=data;
    //     console.log(data);
    //   },
    //   (error)=>{
    //     document.writeln("nothing");
    //   }
    // )
      
      
  }
}
