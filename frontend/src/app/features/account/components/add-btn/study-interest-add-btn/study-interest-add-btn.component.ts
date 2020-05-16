import { StudyInterestModalComponent } from '../../modal/study-interest-modal/study-interest-modal.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-interest-add-btn',
  templateUrl: './study-interest-add-btn.component.html',
  styleUrls: ['./study-interest-add-btn.component.css']
})
export class StudyInterestAddBtnComponent implements OnInit {
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
