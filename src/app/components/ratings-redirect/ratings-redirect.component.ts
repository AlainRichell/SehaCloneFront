import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ratings-redirect',
  template: '<div class="flex justify-center items-center h-screen">Redirigiendo...</div>'
})
export class RatingsRedirectComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    window.location.href = 'https://dxmisurvey.my.gov.sa/survey/p/steps/1/5a937fb2-b4a1-4182-80fe-08dd4f6aa420/register';
  }
} 