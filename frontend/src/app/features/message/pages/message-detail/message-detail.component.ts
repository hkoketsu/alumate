import { User } from './../../../auth/models/auth.model';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/features/account/services/account.service';
import { AuthService } from '../../../auth/services/auth.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Message } from '../../models/message.model';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  profileImageUrl: string;
  sender: User;
  messages: any;
  contactUserId: number;
  contactUser: User;

  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private activatdRoute: ActivatedRoute,
    private messageService: MessageService,
  ) { 
    this.activatdRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.contactUserId = +params.get('id');
        console.log(this.contactUserId)
        this.authService.getUserById(this.contactUserId).subscribe(
          user => {
            this.contactUser = user
            console.log(this.contactUser)
    
          }
        )
      }
    )
  }

  ngOnInit(): void {
    

    this.profileImageUrl = this.accountService.getProfileImageUrl(null);
    this.messageService.getMessages(this.contactUserId).subscribe(
      msg => { 
        console.log(msg)      
        this.messages = msg
        console.log(this.messages)
      }
    )
    


    // this.messages = [
    //   {
    //     sender: {
    //       id: 1,
    //       username: 'hkoketsu',
    //       email: 'hiroki@email.com',
    //     },
    //     receiver: {
    //       id: 1,
    //       username: 'hoge',
    //       email: 'hiroki@email.com',
    //     },
    //     body: 'Hi',
    //     created_at: new Date()
    //   },
    //   {
    //     sender: {
    //       id: 1,
    //       username: 'hoge',
    //       email: 'hiroki@email.com',
    //     },
    //     receiver: {
    //       id: 1,
    //       username: 'hkoketsu',
    //       email: 'hiroki@email.com',
    //     },
    //     body: 'Hello',
    //     created_at: new Date()
    //   },
    // ]
  }

}
