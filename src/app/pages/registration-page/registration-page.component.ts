import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { RegisterComponent } from '../../components/register/register.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-registration-page',
  imports: [NavbarComponent, FooterComponent, RegisterComponent],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {

}
