import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { BaseConnectComponent } from './pages/base-connect/base-connect.component';
import { BaseInquiryComponent } from './pages/base-inquiry/base-inquiry.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'auth', children: [
    { path: 'base-inquiry', component: BaseInquiryComponent },
    { path: 'base-connect', component: BaseConnectComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
