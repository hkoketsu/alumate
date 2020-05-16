import { AuthService } from './../../../../features/auth/services/auth.service';
import { NavModalComponent } from './../nav-modal/nav-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-auth',
  templateUrl: './navbar-auth.component.html',
  styleUrls: ['./navbar-auth.component.css']
})
export class NavbarAuthComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  openNavModal(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: false,
      maxWidth: '100%'
    };
    this.dialog.open(NavModalComponent, dialogConfig);
  }

  logout() {
    this.authService.logout();
  }
}
