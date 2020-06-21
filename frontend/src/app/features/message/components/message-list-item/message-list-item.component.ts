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
  @Input() message: any;
  contactUser: User;
  user: User;
  profileImageUrl: string;

  constructor(
    private accountService: AccountService,
    private authservice: AuthService,
  ) { }

  ngOnInit(): void {
    this.getContactUser();
    this.profileImageUrl = this.accountService.getProfileImageUrl(null);    
  }

  getContactUser() {
    this.authservice.getUser().subscribe(
      user => {
        this.user = user
        this.message.sender
        if(this.user.id == this.message.sender) {
          this.authservice.getUserById(this.message.receiver).subscribe(
            user => {    
              this.contactUser = user
            }
          );
        } else {
          this.authservice.getUserById(this.message.sender).subscribe(
            user => {    
              this.contactUser = user
            }
          );
        }

      }
    )
  }
}
