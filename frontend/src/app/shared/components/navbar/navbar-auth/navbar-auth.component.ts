import { AuthService } from './../../../../features/auth/services/auth.service';
import { NavModalComponent } from './../nav-modal/nav-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-navbar-auth',
  templateUrl: './navbar-auth.component.html',
  styleUrls: ['./navbar-auth.component.css'],
})
export class NavbarAuthComponent implements OnInit{
  unreadMsgCount: Number;
  initial; afterInitial;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private notifications: NotificationService
  ) {}

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications() {
    this.notifications.getNotifications().subscribe(
      nof => this.unreadMsgCount = nof[0].notification_data ? +nof[0].notification_data: 0
    )
  }

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
