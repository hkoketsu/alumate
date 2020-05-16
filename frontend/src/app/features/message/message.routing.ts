import { MessageDetailComponent } from './pages/message-detail/message-detail.component';
import { MessageComponent } from './message.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: 'message', canActivate: [AuthGuard], children: [
    { path: 'detail', component: MessageDetailComponent },
    { path: '', component: MessageComponent },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
