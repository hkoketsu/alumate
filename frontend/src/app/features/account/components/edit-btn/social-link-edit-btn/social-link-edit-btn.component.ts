import { SocialLinkModalComponent } from '../../modal/social-link-modal/social-link-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-social-link-edit-btn',
  templateUrl: './social-link-edit-btn.component.html',
  styleUrls: ['./social-link-edit-btn.component.css']
})
export class SocialLinkEditBtnComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: true
    };
    this.dialog.open(SocialLinkModalComponent, dialogConfig);
  }
}
