import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./features/card/card.component";
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContactsComponent } from "./features/contacts/contacts.component";
import { ScrollTop } from 'primeng/scrolltop';
import { AboutUsComponent } from "./features/about-us/about-us.component";
import { HowItWorksComponent } from "./features/how-it-works/how-it-works.component";
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    FooterComponent,
    ContactsComponent,
    ScrollTop,
    AboutUsComponent,
    HowItWorksComponent,
    HeaderComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'website-rifa-xbox';
}
