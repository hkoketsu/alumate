import { EducationModalComponent } from './components/modal/education-modal/education-modal.component';
import { SharedModule } from './../../shared/modules/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WorkModalComponent } from './components/modal/work-modal/work-modal.component';
import { StudyInterestModalComponent } from './components/modal/study-interest-modal/study-interest-modal.component';
import { StudyAbroadModalComponent } from './components/modal/study-abroad-modal/study-abroad-modal.component';
import { SocialLinkModalComponent } from './components/modal/social-link-modal/social-link-modal.component';
import { ScholarshipModalComponent } from './components/modal/scholarship-modal/scholarship-modal.component';
import { ProfileModalComponent } from './components/modal/profile-modal/profile-modal.component';
import { ProfileImageModalComponent } from './components/modal/profile-image-modal/profile-image-modal.component';
import { GoalModalComponent } from './components/modal/goal-modal/goal-modal.component';
import { DirectMessageModalComponent } from './components/modal/direct-message-modal/direct-message-modal.component';
import { BasicInfoModalComponent } from './components/modal/basic-info-modal/basic-info-modal.component';
import { AboutModalComponent } from './components/modal/about-modal/about-modal.component';
import { WorkEducationEditBtnComponent } from './components/edit-btn/work-education-edit-btn/work-education-edit-btn.component';
import { WorkEditBtnComponent } from './components/edit-btn/work-edit-btn/work-edit-btn.component';
import { StudyInterestEditBtnComponent } from './components/edit-btn/study-interest-edit-btn/study-interest-edit-btn.component';
import { SocialLinkEditBtnComponent } from './components/edit-btn/social-link-edit-btn/social-link-edit-btn.component';
import { ScholarshipEditBtnComponent } from './components/edit-btn/scholarship-edit-btn/scholarship-edit-btn.component';
import { ProfileImageEditBtnComponent } from './components/edit-btn/profile-image-edit-btn/profile-image-edit-btn.component';
import { ProfileEditBtnComponent } from './components/edit-btn/profile-edit-btn/profile-edit-btn.component';
import { GoalEditBtnComponent } from './components/edit-btn/goal-edit-btn/goal-edit-btn.component';
import { BasicInfoEditBtnComponent } from './components/edit-btn/basic-info-edit-btn/basic-info-edit-btn.component';
import { StudyAbroadEditBtnComponent } from './components/edit-btn/study-abroad-edit-btn/study-abroad-edit-btn.component';
import { WorkAddBtnComponent } from './components/add-btn/work-add-btn/work-add-btn.component';
import { StudyInterestAddBtnComponent } from './components/add-btn/study-interest-add-btn/study-interest-add-btn.component';
import { StudyAbroadAddBtnComponent } from './components/add-btn/study-abroad-add-btn/study-abroad-add-btn.component';
import { SocialLinkAddBtnComponent } from './components/add-btn/social-link-add-btn/social-link-add-btn.component';
import { ScholarshipAddBtnComponent } from './components/add-btn/scholarship-add-btn/scholarship-add-btn.component';
import { ProfileAddBtnComponent } from './components/add-btn/profile-add-btn/profile-add-btn.component';
import { GoalAddBtnComponent } from './components/add-btn/goal-add-btn/goal-add-btn.component';
import { EducationAddBtnComponent } from './components/add-btn/education-add-btn/education-add-btn.component';
import { BasicInfoAddBtnComponent } from './components/add-btn/basic-info-add-btn/basic-info-add-btn.component';
import { AboutAddBtnComponent } from './components/add-btn/about-add-btn/about-add-btn.component';
import { AccountRoutingModule } from './account.routing';
import { AccountComponent } from './account.component';
import { AboutEditBtnComponent } from './components/edit-btn/about-edit-btn/about-edit-btn.component';
import { BaseInquiryFormComponent } from './components/base-inquiry-form/base-inquiry-form.component';
import { BaseInquiryComponent } from './../account/pages/base-inquiry/base-inquiry.component';
import { BaseConnectComponent } from './../account/pages/base-connect/base-connect.component';


@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
  ],
  declarations: [
    AccountComponent,
    BaseConnectComponent,
    BaseInquiryComponent,
    BaseInquiryFormComponent,
    // add butttons
    AboutAddBtnComponent,
    BasicInfoAddBtnComponent,
    EducationAddBtnComponent,
    GoalAddBtnComponent,
    ProfileAddBtnComponent,
    ScholarshipAddBtnComponent,
    SocialLinkAddBtnComponent,
    StudyAbroadAddBtnComponent,
    StudyInterestAddBtnComponent,
    WorkAddBtnComponent,
    // edit buttons
    AboutEditBtnComponent,
    BasicInfoEditBtnComponent,
    GoalEditBtnComponent,
    ProfileEditBtnComponent,
    ProfileImageEditBtnComponent,
    ScholarshipEditBtnComponent,
    SocialLinkEditBtnComponent,
    StudyAbroadEditBtnComponent,
    StudyInterestEditBtnComponent,
    WorkEditBtnComponent,
    WorkEducationEditBtnComponent,
    // modals
    AboutModalComponent,
    BasicInfoModalComponent,
    EducationModalComponent,
    DirectMessageModalComponent,
    GoalModalComponent,
    ProfileImageModalComponent,
    ProfileModalComponent,
    ScholarshipModalComponent,
    SocialLinkModalComponent,
    StudyAbroadModalComponent,
    StudyInterestModalComponent,
    WorkModalComponent,
  ],
  exports: [
    AccountComponent,
    BaseConnectComponent,
    BaseInquiryComponent,
    BaseInquiryFormComponent,
    // add butttons
    AboutAddBtnComponent,
    BasicInfoAddBtnComponent,
    EducationAddBtnComponent,
    GoalAddBtnComponent,
    ProfileAddBtnComponent,
    ScholarshipAddBtnComponent,
    SocialLinkAddBtnComponent,
    StudyAbroadAddBtnComponent,
    StudyInterestAddBtnComponent,
    WorkAddBtnComponent,
    // edit buttons
    AboutEditBtnComponent,
    BasicInfoEditBtnComponent,
    GoalEditBtnComponent,
    ProfileEditBtnComponent,
    ProfileImageEditBtnComponent,
    ScholarshipEditBtnComponent,
    SocialLinkEditBtnComponent,
    StudyAbroadEditBtnComponent,
    StudyInterestEditBtnComponent,
    WorkEditBtnComponent,
    WorkEducationEditBtnComponent,
    // modals
    AboutModalComponent,
    BasicInfoModalComponent,
    EducationModalComponent,
    DirectMessageModalComponent,
    GoalModalComponent,
    ProfileImageModalComponent,
    ProfileModalComponent,
    ScholarshipModalComponent,
    SocialLinkModalComponent,
    StudyAbroadModalComponent,
    StudyInterestModalComponent,
    WorkModalComponent,
  ],
})
export class AccountModule {}
