import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../entities/Customer';

@Pipe({
  name: 'customerfilter',
  standalone: false,
})
export class CustomerfilterPipe implements PipeTransform {
  transform(value: Customer[], customer: string) {
    if (value.length === 0 || customer === '') {
      return value;
    }
    return value.filter(Customer=>
      Customer.username?.toLocaleLowerCase().includes(customer.toLocaleLowerCase()),
    );
  }
}
