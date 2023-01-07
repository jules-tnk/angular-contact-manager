import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'ContactDetail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  @Input()
  contact?: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  deleteContact(): void {
    if (this.contact) {
      this.contactService.deleteContact(this.contact);
    }
    this.contact = undefined;
  }

}
