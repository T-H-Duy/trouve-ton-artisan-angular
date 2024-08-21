import { Component, Input } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponseModalComponent } from '../response-modal/response-modal.component';
import { CommonModule } from '@angular/common';
import { log } from 'node:console';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ResponseModalComponent, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  @Input() artisanMail : any

  message: string = ''; // Message to be displayed in the modal
  loading: boolean = false; // Indicates if the email is being sent (loading state)
  mailStatus: string = ''; // Status of the email send operation ('ok' or 'error') used as class in the modal
  fieldOk : boolean = true;
  showModal : boolean = false; // Controls the visibility of the modal

  // Data model for the email form
  emailData = {
    name: '',
    from : '',
    to : '',
    subject : '',
    body : '' 
  }

  // Object to track which fields are empty
  emptyFields: { name: boolean; from: boolean; subject: boolean; body: boolean } = {
    name: false,
    from: false,
    subject: false,
    body: false
  };

  constructor(private emailService : EmailService) {  }

  // Method to send an email
  sendEmail() {
    this.checkFields() // Validate fields before sending
    if (this.fieldOk){
      this.showModal = true
      this.emailData.to = this.artisanMail // Set recipient's email address
      this.loading = true; // Start loading state
      this.message = ''; // Clear previous messages

      this.emailService.sendEmail(this.emailData).subscribe({
      next: response => {
        this.mailStatus = 'ok';
        this.message = response.message;
        this.loading = false; // Stop loading state
      },
      error: error => {
        this.mailStatus = 'error'
        this.message = `Erreur lors de l'envoi de l'e-mail: ${error.message}`;
        this.loading = false; // Stop loading state
      }
    })
    }else{
      this.shakeAnimation() // Trigger shake animation for the error if fields are not valid
    }
  }

  // Method to check if required fields are filled
  checkFields(){
    this.emptyFields = {
      name: this.emailData.name?.replace(/\s+/g, '') === '',
      from: this.emailData.from?.replace(/\s+/g, '') === '',
      subject: this.emailData.subject?.replace(/\s+/g, '') === '',
      body: this.emailData.body?.replace(/\s+/g, '') === ''
    };

    this.fieldOk = !(this.emptyFields.name || this.emptyFields.from || this.emptyFields.subject || this.emptyFields.body)
  }

  // Method to apply a shake animation to an error message element
  shakeAnimation(){
    setTimeout(()=>{
      let errorMessage = document.getElementById('error')
      if (errorMessage){
      errorMessage.classList.add('shake')
      setTimeout(() => {
        errorMessage.classList.remove('shake')
      }, 250)
    }
    }, 1) // Delay to ensure DOM is updated before applying animation
  }

  closeModal(){
    this.showModal = false;
  }

}
