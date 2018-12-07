import { LoginComponent } from './login/login.component';
import {Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const ROUTES: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent}
]