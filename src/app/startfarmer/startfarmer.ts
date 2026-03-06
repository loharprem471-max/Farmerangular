import { Component, inject } from '@angular/core';
import { WebClientService } from '../../web-client-service';
import { Contact } from '../entities/Contact';

@Component({
  selector: 'app-startfarmer',
  standalone: false,
  templateUrl: './startfarmer.html',
  styleUrl: './startfarmer.scss',
})
export class Startfarmer {


  submitted = false;

  name = '';
  email = '';
  message = '';

  emailError = false;
  messageError = false;
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  contact = new Contact()
  private webclient = inject(WebClientService)
  submitForm(event: Event) {
    event.preventDefault();
    this.submitted = true;

    // Email regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    this.emailError = !this.email || !emailPattern.test(this.email);
    this.messageError = !this.message || this.message.length < 10;

    if (!this.name || this.emailError || this.messageError) {
      return;
    }

    const fromdata = new FormData()
    fromdata.append('name', this.contact.name)
    fromdata.append('email', this.contact.email)
    fromdata.append('message', this.contact.message)

    this.webclient.postdata('/get-message', fromdata).subscribe({
      next: (data: any) => {
        alert("your message sended to Admin")
        console.log(data)
      },
      error(err) {
        alert("please fill the again")
      },
    })

    // Reset
    this.name = '';
    this.email = '';
    this.message = '';
    this.submitted = false;
  }
}
