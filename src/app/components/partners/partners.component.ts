import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Partner } from '../../models/partner.interface';
import { PARTNERS } from '../../mocks/partners.mock';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  partners: Partner[] = PARTNERS;
  partnerPages: Partner[][] = [];
  currentPage = 0;
  readonly partnersPerPage = 4;

  ngOnInit() {
    this.initializePages();
  }

  private initializePages() {
    // Split partners into pages of 4
    for (let i = 0; i < this.partners.length; i += this.partnersPerPage) {
      this.partnerPages.push(this.partners.slice(i, i + this.partnersPerPage));
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.partnerPages.length - 1) {
      this.currentPage++;
    }
  }

  goToPage(pageIndex: number) {
    if (pageIndex >= 0 && pageIndex < this.partnerPages.length) {
      this.currentPage = pageIndex;
    }
  }
}
