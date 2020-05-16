import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-message-modal',
  templateUrl: './direct-message-modal.component.html',
  styleUrls: ['./direct-message-modal.component.css']
})
export class DirectMessageModalComponent implements OnInit {
  body: FormControl = new FormControl();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DirectMessageModalComponent>,
  ) {}

  ngOnInit(): void {
  }

  sendMessage(): void {
    this.dialogRef.close(this.body.value);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
