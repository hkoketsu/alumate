import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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
    this.form.addControl('receiver', new FormControl('', Validators.required));
    this.form.addControl('body', new FormControl('', Validators.required));
  }

  ngOnInit(): void {
  }

  sendMessage(): void {
    if(this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      console.log('not valid!')
    };
  }

  cancel(): void {
    this.dialogRef.form
    this.dialogRef.close();
  }
}
