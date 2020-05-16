import { SharedModule } from './../../shared/modules/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InquiryComponent } from './inquiry.component';
import { InquiryCardComponent } from './components/inquiry-card/inquiry-card.component';
import { InquiryDetailListTagSectionComponent } from './components/inquiry-detail-list-tag-section/inquiry-detail-list-tag-section.component';
import { InquiryDetailListTagComponent } from './components/inquiry-detail-list-tag/inquiry-detail-list-tag.component';
import { InquiryDetailCommentComponent } from './components/inquiry-detail-comment/inquiry-detail-comment.component';
import { InquiryDetailComponent } from './pages/inquiry-detail/inquiry-detail.component';
import { InquiryDetailCommentFormComponent } from './components/inquiry-detail-comment-form/inquiry-detail-comment-form.component';
import { InquiryDetailCommentSectionComponent } from './components/inquiry-detail-comment-section/inquiry-detail-comment-section.component';
import { InquiryResultSectionComponent } from './components/inquiry-result-section/inquiry-result-section.component';
import { InquiryRoutingModule } from './inquiry.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InquiryRoutingModule
  ],
  declarations: [
    InquiryComponent,
    InquiryDetailComponent,
    InquiryCardComponent,
    InquiryDetailCommentComponent,
    InquiryDetailCommentFormComponent,
    InquiryDetailCommentSectionComponent,
    InquiryDetailListTagComponent,
    InquiryDetailListTagSectionComponent,
    InquiryResultSectionComponent,
  ],
  exports: [
    InquiryComponent,
    InquiryDetailComponent,
    InquiryCardComponent,
    InquiryDetailCommentComponent,
    InquiryDetailCommentFormComponent,
    InquiryDetailCommentSectionComponent,
    InquiryDetailListTagComponent,
    InquiryDetailListTagSectionComponent,
    InquiryResultSectionComponent,
  ],
})
export class InquiryModule {}
