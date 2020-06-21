import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/features/auth/models/auth.model';
import { AccountService } from '../../../account/services/account.service';
import { AuthService } from '../../../auth/services/auth.service';
import { MessageService } from '../../services/message.service';
// import { EventEmitter } from 'protractor';

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
  @Output() evnt:EventEmitter<any> = new EventEmitter();


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
      this.messageservice.postMessage(this.form.value).subscribe(
        d => {
          console.log(d)
          this.addMessage(d)
          this.dialogRef.close();
          this.messageservice.update()
        }
      )
    } else {
      console.log('not valid!')
    };
  }

  addMessage(msg:any) {
    console.log("addmessage")
    this.evnt.emit(msg);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
