import { ProfileModalComponent } from '../../modal/profile-modal/profile-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-edit-btn',
  templateUrl: './profile-edit-btn.component.html',
  styleUrls: ['./profile-edit-btn.component.css']
})
export class ProfileEditBtnComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: true
    };
    this.dialog.open(ProfileModalComponent, dialogConfig);
  }
}
