import { AccountService } from '../../../account/services/account.service';
import { BasicInfo } from '../../../account/models/account.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-connect',
  templateUrl: './base-connect.component.html',
  styleUrls: ['./base-connect.component.css']
})
export class BaseConnectComponent implements OnInit {
  futures: BasicInfo[];
  students: BasicInfo[];
  alumni: BasicInfo[];

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.futures = this.accountService.getBasicInfoList();
    this.students = this.accountService.getBasicInfoList();
    this.alumni = this.accountService.getBasicInfoList();
  }
}
