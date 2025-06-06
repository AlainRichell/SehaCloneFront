import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

interface Certificate {
  id: number;
  codigo: string;
  nombre_paciente: string;
  identificacion: string;
  nacionalidad: string;
  centro_servicio: string;
  nombre_medico: string;
  titulo_trabajo: string;
  fecha_inicio: string;
  fecha_salida: string;
  fecha_inicio_lunar?: string;
  fecha_salida_lunar?: string;
  duracion?: number;
  fecha_creacion: string;
  centro_medico: {
    nombre: string;
  };
}

@Component({
  selector: 'app-certificate-query',
  templateUrl: './certificate-query.component.html',
  styleUrls: ['./certificate-query.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink]
})
export class CertificateQueryComponent {
  code: string = '';
  identification: string = '';
  certificate: Certificate | null = null;
  error: string = '';

  constructor(private http: HttpClient) {}

  resetForm() {
    this.certificate = null;
    this.code = '';
    this.identification = '';
    this.error = '';
  }

  onSubmit() {
    if (this.certificate) {
      this.resetForm();
      return;
    }
    
    this.error = '';
    this.certificate = null;

    this.http.get<Certificate>(`${environment.apiUrl}/certificados/?codigo=${this.code}&identificacion=${this.identification}`)
      .subscribe({
        next: (certificate) => {
          this.certificate = certificate;
        },
        error: (error) => {
          this.error = 'خطأ في الاستعلام';
          console.error('خطأ:', error);
        }
      });
  }

  downloadCertificate() {
    if (!this.certificate) return;
    
    this.http.get(`${environment.apiUrl}/certificados/${this.certificate.id}/print/`, { responseType: 'blob' })
      .subscribe({
        next: (blob) => {
          saveAs(blob, `SickLeaves-${this.certificate?.codigo}.PDF`);
        },
        error: (error) => {
          this.error = 'خطأ في تحميل الشهادة.';
          console.error('خطأ:', error);
        }
      });
  }
}