import { Component, OnInit, Input } from '@angular/core';
import { BasicInfo, ProfileImage, Education } from 'src/app/features/account/models/account.model';
import { User } from 'src/app/features/auth/models/auth.model';
import { AccountService } from 'src/app/features/account/services/account.service';

@Component({
  selector: 'app-account-summary-section',
  templateUrl: './account-summary-section.component.html',
  styleUrls: ['./account-summary-section.component.css']
})
export class AccountSummarySectionComponent implements OnInit {
  @Input() basicInfo: BasicInfo;

  user: User;
  profileImage: ProfileImage;
  education: Education;

  logoUrl: string;
  followed = false;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.user = this.basicInfo.user;
    this.profileImage = {
      user: null,
      imageUrl: this.accountService.getProfileImageUrl(null)
    };
    this.logoUrl = this.getLogoUrl();
  }

  getLogoUrl(): string {
    switch (this.basicInfo.status.value) {
      case 'FU': return 'assets/img/brand/logo_future.png';
      case 'CU': return 'assets/img/brand/logo_current.png';
      case 'AL': return 'assets/img/brand/logo_alumni.png';
      default: return null;
    }
  }

  follow(): void {
    console.log('follow!');
  }
}
