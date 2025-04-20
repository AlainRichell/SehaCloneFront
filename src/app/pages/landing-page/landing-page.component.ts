import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomeComponent } from '../../components/home/home.component';
import { HealthServicesComponent } from '../../components/health-services/health-services.component';
import { HealthSystemComponent } from '../../components/health-system/health-system.component';
import { PartnersComponent } from '../../components/partners/partners.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    NavbarComponent,
    HomeComponent,
    HealthServicesComponent,
    HealthSystemComponent,
    PartnersComponent,
    FaqComponent,
    FooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
