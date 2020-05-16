import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AboutModalComponent } from '../../modal/about-modal/about-modal.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-add-btn',
  templateUrl: './about-add-btn.component.html',
  styleUrls: ['./about-add-btn.component.css']
})
export class AboutAddBtnComponent implements OnInit {
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
