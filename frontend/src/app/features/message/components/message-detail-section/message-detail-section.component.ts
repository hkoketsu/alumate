import { AccountService } from '../../../account/services/account.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Message } from '../../models/message.model';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/features/auth/models/auth.model';

@Component({
  selector: 'app-message-detail-section',
  templateUrl: './message-detail-section.component.html',
  styleUrls: ['./message-detail-section.component.css']
})
export class MessageDetailSectionComponent implements OnInit {
  @Input() message: any;
  sender: User;
  profileImageUrl: string;


  constructor(
    private accountService: AccountService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    
    this.profileImageUrl = this.accountService.getProfileImageUrl(null);
    this.authService.getUserById(this.message.sender).subscribe(
      user => {
        this.sender = user
      }
    )
    
  }
}
