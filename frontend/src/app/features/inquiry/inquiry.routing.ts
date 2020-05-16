import { AuthGuard } from './../../core/guards/auth.guard';
import { InquiryComponent } from './inquiry.component';
import { InquiryDetailComponent } from './pages/inquiry-detail/inquiry-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'inquiry', canActivate: [AuthGuard], children: [
    { path: 'detail', component: InquiryDetailComponent },
    { path: '', component: InquiryComponent },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquiryRoutingModule { }
