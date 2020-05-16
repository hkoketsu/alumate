import { SharedModule } from './../../shared/modules/shared.module';
import { LandingPageRoutingModule } from './landing-page.routing';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LandingpageComponent } from './landing-page.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    LandingPageRoutingModule,
    SharedModule
  ],
  declarations: [
    LandingpageComponent,
    ContactComponent,
    ContactFormComponent
  ],
  exports: [
  ],
})
export class LandingPageModule {}
