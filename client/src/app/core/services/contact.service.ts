import { Injectable } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  /**
   * Simulates sending a contact form message.
   * In a real application, this would use HttpClient to POST data to a backend.
   */
  sendMessage(contactData: Contact): Observable<{ success: boolean; message: string }> {
    // Basic validation mock
    if (!contactData.email || !contactData.message || !contactData.name) {
      return throwError(() => new Error('Name, Email, and Message are required fields.'));
    }

    // Simulate successful API call to send email/message
    console.log('Sending message to backend...', contactData);
    
    return of({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.'
    }).pipe(delay(1200)); // Simulate network latency
  }
}
