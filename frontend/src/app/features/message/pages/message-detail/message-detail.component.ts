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
          id: 1,
          username: 'hkoketsu',
          email: 'hiroki@email.com',
        },
        receiver: {
          id: 1,
          username: 'hoge',
          email: 'hiroki@email.com',
        },
        body: 'Hi',
        created_at: new Date()
      },
      {
        sender: {
          id: 1,
          username: 'hoge',
          email: 'hiroki@email.com',
        },
        receiver: {
          id: 1,
          username: 'hkoketsu',
          email: 'hiroki@email.com',
        },
        body: 'Hello',
        created_at: new Date()
      },
    ]
  }

}
