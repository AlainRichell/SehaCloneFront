import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterSmallComponent } from '../../../components/footer-small/footer-small.component';
import { CertificateQueryComponent } from '../../../components/certificate-query/certificate-query.component';

@Component({
  selector: 'app-leave-query',
  imports: [NavbarComponent, FooterSmallComponent, CertificateQueryComponent],
  templateUrl: './leave-query.component.html',
  styleUrl: './leave-query.component.css'
})
export class LeaveQueryComponent {

}
