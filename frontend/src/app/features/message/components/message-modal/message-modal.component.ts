import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/features/auth/models/auth.model';
import { Follow } from '../../../account/models/account.model';
import { AccountService } from '../../../account/services/account.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent implements OnInit {
  form: FormGroup;

  userOptions: Follow[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MessageModalComponent>,
    private accountservice: AccountService,
    private authservice: AuthService,

    ) {  
    this.form = this.fb.group({
      receiver: [''],
      body: [''],
    });
    this.form.addControl('receiver', new FormControl('', Validators.required));
    this.form.addControl('body', new FormControl('', Validators.required));
  }

  ngOnInit(): void {
    console.log(this.accountservice.getFollowings())
        for(let f of this.accountservice.getFollowings()){
          this.userOptions.push(f.following)
        }
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
