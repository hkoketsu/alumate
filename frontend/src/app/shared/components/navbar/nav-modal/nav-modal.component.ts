import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-modal',
  templateUrl: './nav-modal.component.html',
  styleUrls: ['./nav-modal.component.css']
})
export class NavModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NavModalComponent>,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.dialogRef.updatePosition({ top: '0px' });
    this.dialogRef.updateSize('95%');
  }

  close(): void {
    this.dialogRef.close();
  }

  logout() {
    console.log('log out');
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
