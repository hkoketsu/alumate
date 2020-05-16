import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/features/auth/models/auth.model';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent implements OnInit {
  form: FormGroup;

  userOptions: User[];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MessageModalComponent>) {
    this.form = this.fb.group({
      receiver: [''],
      body: [''],
    });
  }

  ngOnInit(): void {
  }

  sendMessage(): void {
    this.dialogRef.close(this.form.value);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
