import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

interface Certificate {
  id: number;
  // Add other certificate properties as needed
}

@Component({
  selector: 'app-certificate-query',
  templateUrl: './certificate-query.component.html',
  styleUrls: ['./certificate-query.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class CertificateQueryComponent {
  code: string = '';
  identification: string = '';
  certificate: Certificate | null = null;
  error: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.error = '';
    this.certificate = null;

    // First request to get certificate data
    this.http.get<Certificate>(`${environment.apiUrl}/certificados/?codigo=${this.code}&identificacion=${this.identification}`)
      .subscribe({
        next: (certificate) => {
          this.certificate = certificate;
          // After getting the certificate data, download the PDF
          this.downloadCertificate(certificate.id);
        },
        error: (error) => {
          this.error = 'خطأ في الحصول على الشهادة. يرجى التحقق من البيانات المدخلة.';
          console.error('خطأ:', error);
        }
      });
  }

  private downloadCertificate(certificateId: number) {
    this.http.get(`${environment.apiUrl}/certificados/${certificateId}/print/`, { responseType: 'blob' })
      .subscribe({
        next: (blob) => {
          saveAs(blob, `${certificateId}-شهادة.pdf`);
        },
        error: (error) => {
          this.error = 'خطأ في تحميل الشهادة.';
          console.error('خطأ:', error);
        }
      });
  }
} 