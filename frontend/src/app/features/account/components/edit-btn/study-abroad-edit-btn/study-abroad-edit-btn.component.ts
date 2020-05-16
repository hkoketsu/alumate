import { StudyAbroadModalComponent } from '../../modal/study-abroad-modal/study-abroad-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-study-abroad-edit-btn',
  templateUrl: './study-abroad-edit-btn.component.html',
  styleUrls: ['./study-abroad-edit-btn.component.css']
})
export class StudyAbroadEditBtnComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: true
    };
    this.dialog.open(StudyAbroadModalComponent, dialogConfig);
  }
}
