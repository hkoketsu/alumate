import { PostComponent } from './pages/post/post.component';
import { AskComponent } from './pages/ask/ask.component';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'posts', pathMatch: 'prefix' },
    { path: 'posts', component: PostComponent },
    { path: 'asks', component: AskComponent }
  ]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
