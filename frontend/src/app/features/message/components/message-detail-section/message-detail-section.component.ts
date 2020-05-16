import { AccountService } from '../../../account/services/account.service';

import { Message } from '../../models/message.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-detail-section',
  templateUrl: './message-detail-section.component.html',
  styleUrls: ['./message-detail-section.component.css']
})
export class MessageDetailSectionComponent implements OnInit {
  @Input() message: Message;
  profileImageUrl: string;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.profileImageUrl = this.accountService.getProfileImageUrl(null);
  }
}
