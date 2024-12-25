import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./features/card/card.component";
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContactsComponent } from "./features/contacts/contacts.component";
import { ScrollTop } from 'primeng/scrolltop';
import { TimerComponent } from "./shared/components/timer/timer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    FooterComponent,
    ContactsComponent,
    ScrollTop,
    TimerComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'website-rifa-xbox';
  timerDate = new Date('2024-12-30T03:24:00')
}
