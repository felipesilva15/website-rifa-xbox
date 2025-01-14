import { Component } from '@angular/core';
import { CardComponent } from "./../../features/card/card.component";
import { FooterComponent } from './../../shared/components/footer/footer.component';
import { ContactsComponent } from "./../../features/contacts/contacts.component";
import { ScrollTop } from 'primeng/scrolltop';
import { AboutUsComponent } from "./../../features/about-us/about-us.component";
import { HowItWorksComponent } from "./../../features/how-it-works/how-it-works.component";
import { HeaderComponent } from "./../../shared/components/header/header.component";
import { HomeComponent } from "../../features/home/home.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CardComponent,
    FooterComponent,
    ContactsComponent,
    ScrollTop,
    AboutUsComponent,
    HowItWorksComponent,
    HeaderComponent,
    HomeComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
