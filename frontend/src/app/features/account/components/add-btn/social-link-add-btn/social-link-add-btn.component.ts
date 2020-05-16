import { SocialLinkModalComponent } from '../../modal/social-link-modal/social-link-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-social-link-add-btn',
  templateUrl: './social-link-add-btn.component.html',
  styleUrls: ['./social-link-add-btn.component.css']
})
export class SocialLinkAddBtnComponent implements OnInit {
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
