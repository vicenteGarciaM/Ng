import { Routes } from '@angular/router';
import { LoginAuthComponent } from './login-auth/login-auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'auth-login', pathMatch: 'full' },
    { path: 'auth-login', component: LoginAuthComponent },
    

];
