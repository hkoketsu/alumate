import { BasicInfo } from '../../../models/account.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { BasicInfoModalComponent } from '../../modal/basic-info-modal/basic-info-modal.component';

@Component({
  selector: 'app-basic-info-edit-btn',
  templateUrl: './basic-info-edit-btn.component.html',
  styleUrls: ['./basic-info-edit-btn.component.css']
})
export class BasicInfoEditBtnComponent implements OnInit {

  isFollowing = false;
  basicInfo: BasicInfo;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: true
    };
    this.dialog.open(BasicInfoModalComponent, dialogConfig);
  }
}
