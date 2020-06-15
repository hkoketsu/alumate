import { BasicInfo } from '../../../account/models/account.model';
import { Inquiry, InquiryComment, InquiryLike } from '../../models/inquiry.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inquiry-detail-comment-section',
  templateUrl: './inquiry-detail-comment-section.component.html',
  styleUrls: ['./inquiry-detail-comment-section.component.css']
})
export class InquiryDetailCommentSectionComponent implements OnInit {
  @Input() inquiry: Inquiry;

  comments: InquiryComment[];
  pluralMapping: { [k: string]: string } = {
    '=0': 'comments',
    '=1': 'comment',
    other: 'comments',
  };

  constructor(
  ) { }

  ngOnInit(): void {
    this.comments = [
      {
        user: {
          id: 1,
          username: 'hkoketsu',
          email: 'hiroki@email.com',
        },
        inquiry: {
          user: {
            id: 1,
            username: 'hkoketsu',
            email: 'hiroki@email.com',
          },
          title: 'title',
          body: 'description',
          created_at: new Date(),
        },
        created_at: new Date(),
        body: 'Hi',
      },
      {
        user: {
          id: 1,
          username: 'hkoketsu',
          email: 'hiroki@email.com',
        },
        inquiry: {
          user: {
            id: 1,
            username: 'hkoketsu',
            email: 'hiroki@email.com',
          },
          title: 'title',
          body: 'description',
          created_at: new Date(),
        },
        created_at: new Date(),
        body: 'Hello',
      },
    ];
  }

}
