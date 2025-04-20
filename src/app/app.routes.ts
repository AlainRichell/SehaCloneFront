import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LeaveQueryComponent } from './pages/queries/leave-query/leave-query.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { environment } from '../environments/environment';
import { LoginRedirectComponent } from './pages/login-redirect/login-redirect.component';
import { RatingsRedirectComponent } from './components/ratings-redirect/ratings-redirect.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'leave-query', component: LeaveQueryComponent},
    {path: 'login', component: LoginRedirectComponent},
    {path: 'register', component: RegistrationPageComponent},
    {path: 'ratings', component: RatingsRedirectComponent},
    {path: '**', redirectTo: ''}
];
