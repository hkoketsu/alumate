import { ScholarshipModalComponent } from '../../modal/scholarship-modal/scholarship-modal.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarship-add-btn',
  templateUrl: './scholarship-add-btn.component.html',
  styleUrls: ['./scholarship-add-btn.component.css']
})
export class ScholarshipAddBtnComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: true
    };
    this.dialog.open(ScholarshipModalComponent, dialogConfig);
  }
}
