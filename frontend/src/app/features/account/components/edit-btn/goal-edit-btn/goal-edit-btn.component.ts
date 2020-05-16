import { GoalModalComponent } from '../../modal/goal-modal/goal-modal.component';
import { Goal } from '../../../models/account.model';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { BasicInfoModalComponent } from '../../modal/basic-info-modal/basic-info-modal.component';

@Component({
  selector: 'app-goal-edit-btn',
  templateUrl: './goal-edit-btn.component.html',
  styleUrls: ['./goal-edit-btn.component.css']
})
export class GoalEditBtnComponent implements OnInit {
  goals: Goal[];

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
