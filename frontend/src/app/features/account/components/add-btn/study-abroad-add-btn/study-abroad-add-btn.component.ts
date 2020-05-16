import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { StudyAbroadModalComponent } from '../../modal/study-abroad-modal/study-abroad-modal.component';

@Component({
  selector: 'app-study-abroad-add-btn',
  templateUrl: './study-abroad-add-btn.component.html',
  styleUrls: ['./study-abroad-add-btn.component.css']
})
export class StudyAbroadAddBtnComponent implements OnInit {
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
