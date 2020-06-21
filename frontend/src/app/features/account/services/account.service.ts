import { CurrentStatus, Country, BasicInfo, Follow } from '../models/account.model';
import { Injectable, Inject } from '@angular/core';
import { User } from '../../auth/models/auth.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  apiUrl: string;

  basicInfo: BasicInfo;

  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string,
  ) {
    this.apiUrl = this.baseUrl + '/account';
  }

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

  getCountries() {
    return this.http.get<Country[]>(`${this.apiUrl}/countries`);
  }

  getCountryOptions(filterValue: string) {
    return this.http.get<Country[]>(`${this.apiUrl}/countries?start-with=${filterValue}`);
  }

  getBasicInfoList(): BasicInfo[] {
    return [
      {
        user: {
          id: 1,
          username: 'hkoketsu1',
          email: 'hiroki@email.com',
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
    ];
  }

  sendBasicInfo(name: string, status: CurrentStatus, homeCountry: Country, studyAbroadCountry: Country) {
    return this.http.post(`${this.apiUrl}/basic-info`, { name, status, homeCountry, studyAbroadCountry });
  }

  updateBasicInfo(name: string, status: CurrentStatus, homeCountry: Country, studyAbroadCountry: Country) {
    return this.http.put(`${this.apiUrl}/basic-info`, { name, status, homeCountry, studyAbroadCountry });
  }

  getFollowings(id: number){
    console.log(id)
    return this.http.get<any>(`${this.apiUrl}/followings?account=${id}`);
  }

  // getFollowings(): Follow[] {
  //   return [
  //     {
  //       follower: {
  //         id: 1,
  //         username: 'hkoketsu1',
  //         email: 'hiroki@email.com',
  //       },
  //       following: {
  //         id: 2,
  //         username: 'vickas',
  //         email: 'hiroki@email.com',
  //       },
  //     },
  //     {
  //       follower: {
  //         id: 3,
  //         username: 'shinta',
  //         email: 'hiroki@email.com',
  //       },
  //       following: {
  //         id: 4,
  //         username: 'applie',
  //         email: 'hiroki@email.com',
  //       },
  //     },
  //     {
  //       follower: {
  //         id: 4,
  //         username: 'apple',
  //         email: 'hiroki@email.com',
  //       },
  //       following: {
  //         id: 3,
  //         username: 'shinta',
  //         email: 'hiroki@email.com',
  //       },
  //     },
  //   ];
    
  // }
}
