import { Component, OnInit } from '@angular/core';
import { Contact } from '../../shared/models/contact';
import { PhonePipe } from '../../shared/pipes/phone.pipe';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [PhonePipe],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  isLoaging: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoaging = true;

    this.contacts = [
      {
        name: 'Felipe Silva',
        phoneNumber: '11983432682'
      },
      {
        name: 'Samanta Neris',
        phoneNumber: '11977300214'
      },
    ];

    this.isLoaging = false;
  }
}
