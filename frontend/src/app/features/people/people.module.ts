import { SharedModule } from './../../shared/modules/shared.module';
import { CommonModule } from '@angular/common';
import { PeopleResultSectionComponent } from './people-result-section/people-result-section.component';
import { PeopleRoutingModule } from './people.routing';
import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';



@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule
  ],
  declarations: [
    PeopleComponent,
    PeopleResultSectionComponent
  ],
  exports: [
    PeopleComponent,
    PeopleResultSectionComponent
  ]
})
export class PeopleModule {}
