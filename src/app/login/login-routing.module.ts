import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  {
    path: 'login-page',
    component: LoginComponent
  },
  {
    path: 'register-page',
    component: RegistrationComponent
  },
  {
    path: 'forgot-page',
    component: ForgotPasswordComponent
  },
  {
    path: '',
    redirectTo: 'register-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
