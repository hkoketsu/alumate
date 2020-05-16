import { RouterModule } from '@angular/router';
import { BaseInquiryFormComponent } from './components/base-inquiry-form/base-inquiry-form.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { LoginComponent } from './pages/login/login.component';
import { BaseInquiryComponent } from './pages/base-inquiry/base-inquiry.component';
import { BaseConnectComponent } from './pages/base-connect/base-connect.component';
import { SharedModule } from './../../shared/modules/shared.module';
import { AuthRoutingModule } from './auth.routing';
import { NgModule } from '@angular/core';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    BaseConnectComponent,
    BaseInquiryComponent,
    LoginComponent,
    PrivacyPolicyComponent,
    SignupComponent,
    BaseInquiryFormComponent,
    SignupFormComponent,
    LoginFormComponent
  ],
  exports: [
    BaseConnectComponent,
    BaseInquiryComponent,
    LoginComponent,
    PrivacyPolicyComponent,
    SignupComponent,
    BaseInquiryFormComponent,
    SignupFormComponent,
    LoginFormComponent
  ],
})
export class AuthModule {}
