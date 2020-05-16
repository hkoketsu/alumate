import { SharedModule } from './../../shared/modules/shared.module';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { MessageDetailSectionComponent } from './components/message-detail-section/message-detail-section.component';
import { MessageListItemComponent } from './components/message-list-item/message-list-item.component';
import { MessageDetailFormComponent } from './components/message-detail-form/message-detail-form.component';
import { MessageDetailComponent } from './pages/message-detail/message-detail.component';
import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message.routing';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    MessageRoutingModule,
    SharedModule
  ],
  declarations: [
    MessageComponent,
    MessageDetailComponent,
    MessageDetailFormComponent,
    MessageDetailSectionComponent,
    MessageListItemComponent,
    MessageModalComponent
  ],
  exports: [
    MessageComponent,
    MessageDetailComponent,
    MessageDetailFormComponent,
    MessageDetailSectionComponent,
    MessageListItemComponent,
    MessageModalComponent
  ]
})
export class MessageModule {}
