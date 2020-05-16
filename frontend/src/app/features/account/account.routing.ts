import { AccountComponent } from './account.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { BaseInquiryComponent } from './pages/base-inquiry/base-inquiry.component';
import { BaseConnectComponent } from './pages/base-connect/base-connect.component';

const routes: Routes = [
  { path: 'account', canActivate: [AuthGuard], children: [
    { path: 'base-inquiry', component: BaseInquiryComponent },
    { path: 'base-connect', component: BaseConnectComponent },
    { path: ':id', component: AccountComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
