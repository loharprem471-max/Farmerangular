import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../entities/Products';

@Pipe({
  name: 'productfilter',
  standalone: false,
})
export class ProductfilterPipe implements PipeTransform {

  transform(value: Products[], productItem: String) {

    if (value.length === 0 || productItem === '') {
      return value
    }
    return value.filter(Products => Products.productName.toLocaleLowerCase().includes(productItem.toLocaleLowerCase()))
  }

}
