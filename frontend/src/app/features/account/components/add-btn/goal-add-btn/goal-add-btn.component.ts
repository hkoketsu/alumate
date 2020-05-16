import { GoalModalComponent } from '../../modal/goal-modal/goal-modal.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal-add-btn',
  templateUrl: './goal-add-btn.component.html',
  styleUrls: ['./goal-add-btn.component.css']
})
export class GoalAddBtnComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: true
    };
    this.dialog.open(GoalModalComponent, dialogConfig);
  }
}
