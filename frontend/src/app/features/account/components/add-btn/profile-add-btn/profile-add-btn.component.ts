import { ProfileModalComponent } from '../../modal/profile-modal/profile-modal.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-add-btn',
  templateUrl: './profile-add-btn.component.html',
  styleUrls: ['./profile-add-btn.component.css']
})
export class ProfileAddBtnComponent implements OnInit {
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
