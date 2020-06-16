import { AccountService } from '../../../account/services/account.service';
import { InquiryLike, InquiryComment } from '../../models/inquiry.model';
import { Component, OnInit, Input } from '@angular/core';
import { BasicInfo } from '../../../account/models/account.model';

@Component({
  selector: 'app-inquiry-detail-comment',
  templateUrl: './inquiry-detail-comment.component.html',
  styleUrls: ['./inquiry-detail-comment.component.css'],
})
export class InquiryDetailCommentComponent implements OnInit {
  @Input() comment: InquiryComment;
  likes: InquiryLike[] = [];

  basicInfo: BasicInfo;
  profileImageUrl: string;

  replyFormShown = false;

  constructor(
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.profileImageUrl = this.accountService.getProfileImageUrl(null);
    this.basicInfo = {
      user: {
        id: 1,
        username: 'hkoketsu',
        email: 'hiroki@email.com',
      },
      name: 'Hiroki Koketsu',
      status: {
        value: 'CU',
        displayName: 'Current Student',
      },
      homeCountry: {
        name: 'Japan',
      },
      studyAbroadCountry: {
        name: 'Canada',
      },
    };
  }

  displayReplyForm(): void {
    this.replyFormShown = !this.replyFormShown;
  }
}
