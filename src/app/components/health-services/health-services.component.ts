import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HealthService, HealthServiceSubitem } from '../../models/health-service.model';
import { HEALTH_SERVICES } from '../../mocks/health-services.data';

@Component({
  selector: 'app-health-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './health-services.component.html',
  styleUrls: ['./health-services.component.css']
})
export class HealthServicesComponent implements OnInit {
  services: HealthService[] = HEALTH_SERVICES;
  selectedCategory: HealthService | null = null;
  currentSlide = 0;
  readonly itemsPerSlide = 3;

  ngOnInit() {
    // Seleccionar la primera categoría por defecto
    if (this.services.length > 0) {
      this.selectedCategory = this.services[0];
    }
  }

  get visibleSubitems(): HealthServiceSubitem[] {
    if (!this.selectedCategory) return [];
    
    const start = this.currentSlide * this.itemsPerSlide;
    const end = start + this.itemsPerSlide;
    return this.selectedCategory.subitems.slice(start, end);
  }

  get totalSlides(): number {
    if (!this.selectedCategory) return 0;
    return Math.ceil(this.selectedCategory.subitems.length / this.itemsPerSlide);
  }

  get slideIndices(): number[] {
    return Array.from({ length: this.totalSlides }, (_, i) => i);
  }

  selectCategory(category: HealthService) {
    this.selectedCategory = category;
    this.currentSlide = 0;
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.totalSlides) {
      this.currentSlide = index;
    }
  }
}
