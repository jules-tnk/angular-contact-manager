import { Component, OnInit } from '@angular/core';
import {Contact} from "../model/contact";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'ContactAddForm',
  templateUrl: './contact-add-form.component.html',
  styleUrls: ['./contact-add-form.component.scss']
})
export class ContactAddFormComponent implements OnInit {

  contactToAdd: Contact = {
    familyName: "",
    givenName: "",
    email:"",
    phoneNumber: 0
  };

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts()
  }

  addContact(): void {
    if(this.contactToAdd){

      this.contactService.addContact(this.contactToAdd);
    }
    this.contactToAdd = {
      familyName: "",
      givenName: "",
      email:"",
      phoneNumber: 0
    };
  }

}
