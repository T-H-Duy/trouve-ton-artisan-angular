import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:3000/send-email'; // API endpoint for sending emails

  constructor(private http: HttpClient) { } // Inject HttpClient to make HTTP requests


  // Method to send an email via POST request
  sendEmail(emailData: {name:string, from: string, to: string, subject: string, body: string }): Observable<any> {
    return this.http.post(this.apiUrl, emailData).pipe(
      catchError(this.handleError)
    );
  }

  // Private method to handle HTTP errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code.
      // Error body should contain the error message
    if (error.error && error.error.message) {
      errorMessage = `${error.error.message}`;
    } else {
      errorMessage = `Server Error: ${error.status}\nMessage: ${error.message}`;
    }
    }
    return throwError(() => new Error(errorMessage));
  }
}
