import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login-redirect',
  template: '<div>Redirecting to login...</div>',
  standalone: true,
  imports: [CommonModule]
})
export class LoginRedirectComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `${environment.apiUrl}/admin/`;
    }
  }
} 