import {Injectable} from '@angular/core';
import {Contact} from "../model/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];

  constructor() {
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  generateContactList(): void {
    this.contacts = [
      {givenName: "Juju", familyName: 'Titi', email: "juju@gmail.com", phoneNumber: 5269874},
      {givenName: "Riri", familyName: 'Lala', email: "riri@gmail.com", phoneNumber: 5269874},
      {givenName: "Loulou", familyName: 'Chichi', email: "loulou@gmail.com", phoneNumber: 5269874},
      {givenName: "Nounou", familyName: 'Fifi', email: "nounou@gmail.com", phoneNumber: 5269874},
      {givenName: "Doudou", familyName: 'Bibi', email: "doudou@gmail.com", phoneNumber: 5269874},
    ];
  }

  addContact(contact: Contact): void {
      this.contacts?.push(contact);
  }

  deleteContact(contact: Contact): void {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }
}
