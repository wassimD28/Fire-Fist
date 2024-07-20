import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './core/guards/auth.guard';


export const routes: Routes = [
  {
    path: 'secure',
    loadComponent: ()=> import('./pages/layout/layout.component').then((c)=> c.LayoutComponent),
    canMatch: [authGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'login' }
];

