import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-modal',
  templateUrl: './nav-modal.component.html',
  styleUrls: ['./nav-modal.component.css']
})
export class NavModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NavModalComponent>,
  ) {}

  ngOnInit(): void {
    this.dialogRef.updatePosition({ top: '0px' });
    this.dialogRef.updateSize('95%');
  }

  close(): void {
    this.dialogRef.close();
  }
}
