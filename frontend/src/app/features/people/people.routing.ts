import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: 'people', canActivate: [AuthGuard], children: [
    { path: '', component: PeopleComponent }
  ]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
