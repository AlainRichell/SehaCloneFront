import { Component } from '@angular/core';
import { FooterSmallComponent } from '../../components/footer-small/footer-small.component';
import { RegisterComponent } from '../../components/register/register.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-registration-page',
  imports: [NavbarComponent, FooterSmallComponent, RegisterComponent],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {

}
