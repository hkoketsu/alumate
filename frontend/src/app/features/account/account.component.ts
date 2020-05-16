import { AccountService } from './services/account.service';
import { DirectMessageModalComponent } from './components/modal/direct-message-modal/direct-message-modal.component';
import { BasicInfo, About, Goal, StudyInterest, SocialLink, StudyAbroad, Scholarship, Profile } from './models/account.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  hasEditPermission = true;
  isFollowing = false;
  profileImageOnHover = false;

  basicInfo: BasicInfo = {
    user: null,
    name: 'Hiroki Koketsu',
    status: {
      value: 'CU',
      displayName: 'Current Student'
    },
    homeCountry: {
      name: 'Japan',
    },
    studyAbroadCountry: {
      name: 'Canada'
    }
  };
  studyAbroad: StudyAbroad;
  about: About;
  expHistory: any[];
  goals: Goal[];
  studyInterests: StudyInterest[];
  scholarships: Scholarship[];
  socialLinks: SocialLink[];
  profile: Profile;
  profileImageUrl: string;

  postList: any[];

  constructor(
    private dialog: MatDialog,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.profileImageUrl = this.accountService.getProfileImageUrl(null);
  }

  showProfileImageEditButton() {
    this.profileImageOnHover = true;
  }

  hideProfileImageEditButton() {
    this.profileImageOnHover = false;
  }

  openDirectMessageModal(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: true
    };
    this.dialog.open(DirectMessageModalComponent, dialogConfig);
  }

}
