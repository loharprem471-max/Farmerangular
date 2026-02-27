import { Pipe, PipeTransform } from '@angular/core';
import { Junction } from '../entities/Junction';

@Pipe({
  name: 'junctionfilter',
  standalone: false,
})
export class JunctionfilterPipe implements PipeTransform {

  transform(value: Junction[],searchJunction:string){

    if(value.length===0 || searchJunction==='')
    {
      return value
    }

  return  value.filter(Junction=>Junction.juncname.toLocaleLowerCase().includes(searchJunction.toLocaleLowerCase()))
  }

}
