import { Component, inject } from '@angular/core';
import { Email } from '../entities/Email';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  standalone: false,
  templateUrl: './changepassword.html',
  styleUrl: './changepassword.scss',
})
export class Changepassword {


  passwordData = new Email()

  private webclient = inject(WebClientService)
  private router = inject(Router)

  updatePassword(form: any) {
    if (form.valid &&
      this.passwordData.password === this.passwordData.confirmPassword) {


      this.passwordData.email = sessionStorage.getItem("email")
      this.passwordData.role = sessionStorage.getItem("role")

      // this.passwordData.email = "loharprem471@gmail.com"
      // this.passwordData.role = "farmer"

      console.log(this.passwordData)

      this.webclient.putdata('/update-password/', this.passwordData).subscribe({
        next: (data: any) => {
          alert(`Password Updated Successfully yesssssssssssssss ${data.email} and ${data.password}`)
          this.router.navigate(['/login'])
        },
        error(err) {
          alert("Please Try Again..........")
        },
      })
    }
  }
}
