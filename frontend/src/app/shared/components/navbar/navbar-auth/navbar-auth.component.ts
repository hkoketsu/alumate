import { AuthService } from './../../../../features/auth/services/auth.service';
import { NavModalComponent } from './../nav-modal/nav-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-auth',
  templateUrl: './navbar-auth.component.html',
  styleUrls: ['./navbar-auth.component.css'],
})
export class NavbarAuthComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

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
