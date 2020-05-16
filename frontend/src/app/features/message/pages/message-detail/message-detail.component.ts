import { User } from './../../../auth/models/auth.model';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/features/account/services/account.service';
import { BasicInfo } from 'src/app/features/account/models/account.model';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  profileImageUrl: string;
  sender: User;
  senderBasicInfo: BasicInfo;
  messages: Message[];

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.profileImageUrl = this.accountService.getProfileImageUrl(null);
    this.messages = [
      {
        sender: {
          username: 'hkoketsu',
          email: 'hiroki@email.com',
          password: 'hiroki'
        },
        receiver: {
          username: 'hoge',
          email: 'hiroki@email.com',
          password: 'hiroki'
        },
        body: 'Hi',
        created_at: new Date()
      },
      {
        sender: {
          username: 'hoge',
          email: 'hiroki@email.com',
          password: 'hiroki'
        },
        receiver: {
          username: 'hkoketsu',
          email: 'hiroki@email.com',
          password: 'hiroki'
        },
        body: 'Hello',
        created_at: new Date()
      },
    ]
  }

}
