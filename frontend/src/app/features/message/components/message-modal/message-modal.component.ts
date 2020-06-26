import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/features/auth/models/auth.model';
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
  userOptions = [];


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MessageModalComponent>,
    private accountService: AccountService,
    private authService: AuthService,
    private messageService: MessageService,
    ) {  
    this.form = this.fb.group({
      receiver: [''],
      body: [''],
    });
    this.form.addControl('receiver', new FormControl('', Validators.required));
    this.form.addControl('body', new FormControl('', Validators.required));
    
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      user => {
        this.userId = user.id;
        this.accountService.getFollowings(this.userId).subscribe(
          followings => {
            for(let f of followings) {
              const followeduser = this.authService.getUserById(f.followed).subscribe(
                followeduser => {
                  this.userOptions.push(followeduser);
                }
              )
            }
          }
        );
      } 
    );
  }

  sendMessage(): void {
     if(this.form.valid) {
      console.log(this.form.value.receiver)
      this.messageService.postMessage(this.form.value).subscribe(
        d => {
          this.dialogRef.close();
          this.messageService.update()
        }
      )
    } else {
      console.log('not valid!')
    };
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
