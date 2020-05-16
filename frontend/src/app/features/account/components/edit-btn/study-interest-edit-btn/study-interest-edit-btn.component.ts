import { StudyInterestModalComponent } from '../../modal/study-interest-modal/study-interest-modal.component';
import { StudyInterest } from '../../../models/account.model';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-study-interest-edit-btn',
  templateUrl: './study-interest-edit-btn.component.html',
  styleUrls: ['./study-interest-edit-btn.component.css']
})
export class StudyInterestEditBtnComponent implements OnInit {
  studyInterests: StudyInterest[];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: true
    };
    this.dialog.open(StudyInterestModalComponent, dialogConfig);
  }
}
