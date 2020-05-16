import { RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { LoginComponent } from './pages/login/login.component';
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
    LoginComponent,
    PrivacyPolicyComponent,
    SignupComponent,
    SignupFormComponent,
    LoginFormComponent
  ],
  exports: [
    LoginComponent,
    PrivacyPolicyComponent,
    SignupComponent,
    SignupFormComponent,
    LoginFormComponent
  ],
})
export class AuthModule {}
