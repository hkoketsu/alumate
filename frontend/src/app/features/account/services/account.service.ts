import { CurrentStatus, Country, BasicInfo } from '../models/account.model';
import { Injectable } from '@angular/core';
import { User } from '../../auth/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getProfileImageUrl(user: User) {
    if (!user) {
      return 'assets/img/placeholder.png';
    }
  }

  getStatusOptions(): CurrentStatus[] {
    return [
      {
        value: 'FU',
        displayName: 'Future Student'
      },
      {
        value: 'CU',
        displayName: 'Current Student'
      },
      {
        value: 'AL',
        displayName: 'Alumni'
      },
    ];
  }

  getCountryOptions(): Country[] {
    return [
      {
        name: 'Japan'
      },
      {
        name: 'USA'
      },
      {
        name: 'Canada'
      }
    ];
  }

  getBasicInfoList(): BasicInfo[] {
    return [
      {
        user: {
          username: 'hkoketsu1',
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
          username: 'hkoketsu2',
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
          username: 'hkoketsu3',
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
          username: 'hkoketsu3',
          email: 'hiroki@email.com',
          password: 'hoge',
        },
        status: {
          value: 'FU',
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
          username: 'hkoketsu3',
          email: 'hiroki@email.com',
          password: 'hoge',
        },
        status: {
          value: 'AL',
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
    ];
  }
}
