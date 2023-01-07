import { Component, OnInit } from '@angular/core';
import {Contact} from "../model/contact";
import {ContactService} from "../services/contact.service";


@Component({
  selector: 'ContactList',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  selectedContact?: Contact;

  contacts?: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.generateContactList();
    this.contacts = this.contactService.getContacts();
  }

  setSelectedContact(contact: Contact){
    if (this.selectedContact == contact){
      this.selectedContact = undefined;
      return;
    }
    this.selectedContact = contact;
  }

}
