import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';

import { AuthModule } from './features/auth/auth.module';
import { AccountModule } from './features/account/account.module';
import { HomeModule } from './features/home/home.module';
import { InquiryModule } from './features/inquiry/inquiry.module';
import { LandingPageModule } from './features/landing-page/landing-page.module';
import { MessageModule } from './features/message/message.module';
import { PeopleModule } from './features/people/people.module';
import { SharedModule } from './shared/modules/shared.module';

import { environment } from 'src/environments/environment';
import { JwtTokenInterceptor } from './core/interceptor/jwt-token.interceptor';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgSelectModule,
    Ng5SliderModule,
    NgbModule,
    FontAwesomeModule,
    // feature modules
    AccountModule,
    AuthModule,
    HomeModule,
    InquiryModule,
    LandingPageModule,
    MessageModule,
    PeopleModule,
    // shared module
    SharedModule.forRoot(),
  ],
  providers: [
    { provide: 'BASE_API_URL', useValue: environment.apiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
