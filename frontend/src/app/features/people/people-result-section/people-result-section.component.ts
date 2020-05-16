import { BasicInfo } from '../../account/models/account.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people-result-section',
  templateUrl: './people-result-section.component.html',
  styleUrls: ['./people-result-section.component.css'],
})
export class PeopleResultSectionComponent implements OnInit {
  @Input() filter: any;

  searched = false;
  result: BasicInfo[][] = [];
  resultCount: number;
  pluralMapping: { [k: string]: string } = {
    '=0': 'results',
    '=1': 'result',
    other: 'results',
  };

  constructor() {}

  ngOnInit(): void {
    this.result = [
      [
        {
          user: {
            username: 'hkoketsu',
            email: 'hiroki@email.com',
            password: 'hoge',
          },
          status: {
            value: 'CU',
            displayName: 'Current Student',
          },
          name: 'Hiroki Koketsu',
          homeCountry: {
            name: 'Japan',
          },
          studyAbroadCountry: {
            name: 'Canada',
          },
        },
        {
          user: {
            username: 'hkoketsu',
            email: 'hiroki@email.com',
            password: 'hoge',
          },
          status: {
            value: 'CU',
            displayName: 'Current Student',
          },
          name: 'Hiroki Koketsu',
          homeCountry: {
            name: 'Japan',
          },
          studyAbroadCountry: {
            name: 'Canada',
          },
        },
        {
          user: {
            username: 'hkoketsu',
            email: 'hiroki@email.com',
            password: 'hoge',
          },
          status: {
            value: 'CU',
            displayName: 'Current Student',
          },
          name: 'Hiroki Koketsu',
          homeCountry: {
            name: 'Japan',
          },
          studyAbroadCountry: {
            name: 'Canada',
          },
        },
      ],
      [
        {
          user: {
            username: 'hkoketsu',
            email: 'hiroki@email.com',
            password: 'hoge',
          },
          status: {
            value: 'CU',
            displayName: 'Current Student',
          },
          name: 'Hiroki Koketsu',
          homeCountry: {
            name: 'Japan',
          },
          studyAbroadCountry: {
            name: 'Canada',
          },
        },
        {
          user: {
            username: 'hkoketsu',
            email: 'hiroki@email.com',
            password: 'hoge',
          },
          status: {
            value: 'CU',
            displayName: 'Current Student',
          },
          name: 'Hiroki Koketsu',
          homeCountry: {
            name: 'Japan',
          },
          studyAbroadCountry: {
            name: 'Canada',
          },
        },
        {
          user: {
            username: 'hkoketsu',
            email: 'hiroki@email.com',
            password: 'hoge',
          },
          status: {
            value: 'CU',
            displayName: 'Current Student',
          },
          name: 'Hiroki Koketsu',
          homeCountry: {
            name: 'Japan',
          },
          studyAbroadCountry: {
            name: 'Canada',
          },
        },
      ],
      [
        {
          user: {
            username: 'hkoketsu',
            email: 'hiroki@email.com',
            password: 'hoge',
          },
          status: {
            value: 'CU',
            displayName: 'Current Student',
          },
          name: 'Hiroki Koketsu',
          homeCountry: {
            name: 'Japan',
          },
          studyAbroadCountry: {
            name: 'Canada',
          },
        },
      ],
    ];
    this.resultCount = this.result ? this.result[0].length * this.result.length + this.result[this.result.length - 1].length : 0;
  }
}
