import { AboutModalComponent } from '../../modal/about-modal/about-modal.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { About } from '../../../models/account.model';

@Component({
  selector: 'app-about-edit-btn',
  templateUrl: './about-edit-btn.component.html',
  styleUrls: ['./about-edit-btn.component.css']
})
export class AboutEditBtnComponent implements OnInit {
  about: About;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: true
    };
    this.dialog.open(AboutModalComponent, dialogConfig);
  }

}
