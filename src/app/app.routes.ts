import { ExerciseIndexComponent } from './pages/exercise-index/exercise-index.component';
import { Routes } from '@angular/router';
import { ExerciseShowComponent } from './pages/exercise-show/exercise-show.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


export const routes: Routes = [
  {
    path: 'exercises',
    component: ExerciseIndexComponent
  },
  {
    path: 'show',
    component: ExerciseShowComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

