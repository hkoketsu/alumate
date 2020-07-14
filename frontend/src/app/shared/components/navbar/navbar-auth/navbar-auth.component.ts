import { AuthService } from './../../../../features/auth/services/auth.service';
import { NavModalComponent } from './../nav-modal/nav-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../../../services/notification.service'
import { timer } from 'rxjs';

@Component({
  selector: 'app-navbar-auth',
  templateUrl: './navbar-auth.component.html',
  styleUrls: ['./navbar-auth.component.css'],
})
export class NavbarAuthComponent implements OnInit{
  unread_messages_count: Number;
  id;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private notifications: NotificationService
  ) {}
  
  ngOnInit() {
      // setInterval(() => {
      //   this.getNotifications(); 
      // }, 10000);
      this.getNotifications();
    }

    getNotifications() {
      this.notifications.getNotifications().subscribe(
        nof => this.unread_messages_count = nof[0].notification_data ? +nof[0].notification_data: 0
      )
    }

    // ngOnDestroy() {
    //   if (this.id) {
    //     clearInterval(this.id);
    //   }
    // }

  openNavModal(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: false,
      maxWidth: '100%',
    };
    this.dialog.open(NavModalComponent, dialogConfig);
  }

  logout() {
    console.log('log out');
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  goToAccountPage() {
    const user = this.authService.user;
    if (user) {
      this.router.navigate(['account', user.id]);
    } else {
      this.authService
        .getUser()
        .subscribe((user) => this.router.navigateByUrl(`/account/${user.id}`));
    }
  }
}
