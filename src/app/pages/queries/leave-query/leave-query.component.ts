import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { CertificateQueryComponent } from '../../../components/certificate-query/certificate-query.component';

@Component({
  selector: 'app-leave-query',
  imports: [NavbarComponent, FooterComponent, CertificateQueryComponent],
  templateUrl: './leave-query.component.html',
  styleUrl: './leave-query.component.css'
})
export class LeaveQueryComponent {

}
