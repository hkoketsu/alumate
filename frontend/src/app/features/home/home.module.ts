import { PostFormComponent } from './components/post-form/post-form.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/modules/shared.module';
import { PostContentComponent } from './components/post-content/post-content.component';
import { PostCommentFormComponent } from './components/post-comment-form/post-comment-form.component';
import { PostCommentComponent } from './components/post-comment/post-comment.component';
import { AskFormComponent } from './components/ask-form/ask-form.component';
import { AskContentComponent } from './components/ask-content/ask-content.component';
import { PostComponent } from './pages/post/post.component';
import { AskComponent } from './pages/ask/ask.component';
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
    AskComponent,
    PostComponent,
    AskContentComponent,
    AskFormComponent,
  PostCommentComponent,
    PostCommentFormComponent,
    PostContentComponent,
    PostFormComponent,
  ],
  exports: [
    HomeComponent,
    AskComponent,
    PostComponent,
    AskContentComponent,
    AskFormComponent,
    PostCommentComponent,
    PostCommentFormComponent,
    PostContentComponent,
    PostFormComponent,
  ],
})
export class HomeModule {}
