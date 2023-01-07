import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../model/contact";

@Component({
  selector: 'Contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input()
  contact?: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
