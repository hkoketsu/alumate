import { AccountService } from '../../../account/services/account.service';
import { User } from '../../../auth/models/auth.model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inquiry-detail-comment-form',
  templateUrl: './inquiry-detail-comment-form.component.html',
  styleUrls: ['./inquiry-detail-comment-form.component.css']
})
export class InquiryDetailCommentFormComponent implements OnInit {
  profileImageUrl: string;
  user: User;

  body = new FormControl('');
  selectedFile: File;

  constructor(
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.profileImageUrl = this.accountService.getProfileImageUrl(this.user);
  }

  onFileChanged(event: { target: HTMLInputElement; }) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  send() {
    console.log('send message', this.body.value, this.selectedFile.name);
  }
}
