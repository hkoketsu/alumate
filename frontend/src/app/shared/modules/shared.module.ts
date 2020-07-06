import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SearchSectionComponent } from './../components/search-section/search-section.component';
import { SearchModalComponent } from './../components/search-modal/search-modal.component';
import { NavbarNonAuthComponent } from './../components/navbar/navbar-non-auth/navbar-non-auth.component';
import { NavbarAuthComponent } from './../components/navbar/navbar-auth/navbar-auth.component';
import { NavModalComponent } from './../components/navbar/nav-modal/nav-modal.component';
import { SliderInputComponent } from './../components/input/slider-input/slider-input.component';
import { ChipsInputComponent } from './../components/input/chips-input/chips-input.component';
import { FooterWhiteComponent } from './../components/footer/footer-white/footer-white.component';
import { FooterDarkComponent } from './../components/footer/footer-dark/footer-dark.component';
import { ShareBtnComponent } from './../components/button/share-btn/share-btn.component';
import { ReplyBtnComponent } from './../components/button/reply-btn/reply-btn.component';
import { LikeBtnComponent } from './../components/button/like-btn/like-btn.component';
import { AccountSummarySectionComponent } from './../components/account-summary-section/account-summary-section.component';

import { MaterialModule } from './material.module';

import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng5SliderModule } from 'ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateAgoPipe } from '../pipes/date-ago.pipe';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    NgSelectModule,
    Ng5SliderModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: [
    AccountSummarySectionComponent,
    LikeBtnComponent,
    ReplyBtnComponent,
    ShareBtnComponent,
    FooterDarkComponent,
    FooterWhiteComponent,
    ChipsInputComponent,
    SliderInputComponent,
    NavbarAuthComponent,
    NavbarNonAuthComponent,
    NavModalComponent,
    SearchModalComponent,
    SearchSectionComponent,
    DateAgoPipe,
  ],
  exports: [
    AccountSummarySectionComponent,
    LikeBtnComponent,
    ReplyBtnComponent,
    ShareBtnComponent,
    FooterDarkComponent,
    FooterWhiteComponent,
    ChipsInputComponent,
    SliderInputComponent,
    NavbarAuthComponent,
    NavbarNonAuthComponent,
    NavModalComponent,
    SearchModalComponent,
    SearchSectionComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    NgSelectModule,
    Ng5SliderModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule,
    DateAgoPipe,
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule
    };
  }
}
