import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/features/auth/models/auth.model';
import { Follow } from '../../../account/models/account.model';
import { AccountService } from '../../../account/services/account.service';
import { AuthService } from '../../../auth/services/auth.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent implements OnInit {
  form: FormGroup;
  user: User;
  userId: number;
  userOptions: Follow[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MessageModalComponent>,
    private accountservice: AccountService,
    private authservice: AuthService,
    private messageservice: MessageService,
    ) {  
    this.form = this.fb.group({
      receiver: [''],
      body: [''],
    });
    this.form.addControl('receiver', new FormControl('', Validators.required));
    this.form.addControl('body', new FormControl('', Validators.required));
    
  }

  ngOnInit(): void {
    this.authservice.getUser().subscribe(
      user => {
        this.userId = user.id;
        this.accountservice.getFollowings(this.userId).subscribe(
          followings => {
            for(let f of followings) {
              const followeduser = this.authservice.getUserById(f.followed).subscribe(
                followeduser => {
                  this.userOptions.push(followeduser)
                }
              )
            }
          }
        );
      } 
    );
  }

  sendMessage(receiver:string, body:string): void {
    if(this.form.valid) {
      this.messageservice.postMessage()
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
