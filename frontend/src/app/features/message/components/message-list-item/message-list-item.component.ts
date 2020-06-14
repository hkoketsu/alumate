import { User } from './../../../auth/models/auth.model';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message.model';
import { AccountService } from 'src/app/features/account/services/account.service';
import { AuthService } from '../../../auth/services/auth.service'

@Component({
  selector: 'app-message-list-item',
  templateUrl: './message-list-item.component.html',
  styleUrls: ['./message-list-item.component.css']
})
export class MessageListItemComponent implements OnInit {
  @Input() message: Message;
  name: string;
  user: User;
  profileImageUrl: string;

  constructor(
    private accountService: AccountService,
    private authservice: AuthService,
  ) { }

  ngOnInit(): void {
    this.getName();
    this.profileImageUrl = this.accountService.getProfileImageUrl(null);
  }

  getName() {
    // from basic info: sender is user ? or not ?
    // if(this.message.sender.username == this.user.username){
    //   return this.message.receiver.username
    // }
    this.authservice.getUser(this.message.sender).subscribe(
      user => {        
        console.log(user)
        this.name = user.username
      }
    );
  }
}
