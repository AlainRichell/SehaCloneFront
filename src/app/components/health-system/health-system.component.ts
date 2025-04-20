import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthSystem } from '../../models/health-system.model';
import { HEALTH_SYSTEMS } from '../../mocks/health-systems.data';

@Component({
  selector: 'app-health-system',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './health-system.component.html',
  styleUrl: './health-system.component.css'
})
export class HealthSystemComponent {
  systems = HEALTH_SYSTEMS;
}
