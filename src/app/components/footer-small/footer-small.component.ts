import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FOOTER_DATA } from '../../mocks/footer.data';

@Component({
  selector: 'app-footer-small',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-small.component.html',
  styleUrl: './footer-small.component.css'
})
export class FooterSmallComponent {
  footerData = FOOTER_DATA;
}
