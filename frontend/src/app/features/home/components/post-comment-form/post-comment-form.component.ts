import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/features/account/services/account.service';

@Component({
  selector: 'app-post-comment-form',
  templateUrl: './post-comment-form.component.html',
  styleUrls: ['./post-comment-form.component.css']
})
export class PostCommentFormComponent implements OnInit {
  body = new FormControl();
  selectedFile: File;

  profileImageUrl: string;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.profileImageUrl = this.accountService.getProfileImageUrl(null);
  }

  onFileChanged(event: { target: HTMLInputElement; }) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

}
