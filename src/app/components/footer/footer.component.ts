import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FOOTER_DATA } from '../../mocks/footer.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerData = FOOTER_DATA;
}
