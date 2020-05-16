import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/features/account/services/account.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  profileImageUrl: string;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.profileImageUrl = this.accountService.getProfileImageUrl(null);
  }

}
