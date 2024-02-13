import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  constructor(private fb: FormBuilder) { }

  form: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(10)]],
    message: ['', Validators.required]
  });



  async sendEmail() {

    if (!this.form.valid) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please complete form",
        showConfirmButton: false,
        timer: 1500
      })
    }
    else {
      emailjs.init('ZSni-wsORKQ2kOnts')
      let response = await emailjs.send("service_3rpw18h", "template_rw8ue36", {
        from_name: this.form.value.fullName,
        to_name: "Carlos Portfolio",
        from_email: this.form.value.email,
        subject: this.form.value.subject,
        message: this.form.value.message,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your email has been sent",
        showConfirmButton: false,
        timer: 1500
      })
      this.form.reset();
    }

  }



}
