import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqItem } from '../../models/faq-item.model';
import { FAQ_ITEMS } from '../../mocks/faq-items.data';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs: FaqItem[] = FAQ_ITEMS;

  get leftColumnFaqs(): FaqItem[] {
    return this.faqs.slice(0, Math.ceil(this.faqs.length / 2));
  }

  get rightColumnFaqs(): FaqItem[] {
    return this.faqs.slice(Math.ceil(this.faqs.length / 2));
  }

  toggleFaq(faq: FaqItem): void {
    faq.isOpen = !faq.isOpen;
  }
}
