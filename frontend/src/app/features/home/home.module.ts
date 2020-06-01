import { PostFormComponent } from './components/post-form/post-form.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/modules/shared.module';
import { PostContentComponent } from './components/post-content/post-content.component';
import { PostCommentFormComponent } from './components/post-comment-form/post-comment-form.component';
import { PostCommentComponent } from './components/post-comment/post-comment.component';
import { InquiryFormComponent } from './components/inquiry-form/inquiry-form.component';
import { InquiryContentComponent } from './components/inquiry-content/inquiry-content.component';
import { PostComponent } from './pages/post/post.component';
import { InquiryComponent } from './pages/inquiry/inquiry.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    InquiryComponent,
    PostComponent,
    InquiryContentComponent,
    InquiryFormComponent,
  PostCommentComponent,
    PostCommentFormComponent,
    PostContentComponent,
    PostFormComponent,
  ],
  exports: [
    HomeComponent,
    InquiryComponent,
    PostComponent,
    InquiryContentComponent,
    InquiryFormComponent,
    PostCommentComponent,
    PostCommentFormComponent,
    PostContentComponent,
    PostFormComponent,
  ],
})
export class HomeModule {}
