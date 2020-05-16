import { User } from '../../auth/models/auth.model';
import { Url } from 'url';

export interface BasicInfo {
  user: User;
  name: string;
  status: CurrentStatus;
  homeCountry: Country;
  studyAbroadCountry: Country;
}

export interface CurrentStatus {
  value: string;
  displayName: string;
}

export interface Gender {
  value: string;
  displayName: string;
}

export interface Profile {
  user: User;
  gender: Gender;
  birthday: Date;
}

export interface ProfileImage {
  user: User;
  imageUrl: string;
}

export interface Goal {
  user: User;
  body: string;
}

export interface StudyInterest {
  user: User;
  body: string;
}

export interface About {
  user: User;
  body: string;
}

export interface Education {
  user: User;
  school: School;
  degree: Degree;
  major: Major;
  isStudyAbroad: boolean;
  startYear: string;
  endYear: string;
}

export interface Degree {
  value: string;
  displayName: string;
}

export interface School {
  name: string;
}

export interface Country {
  name: string;
}

export interface Major {
  name: string;
}

export interface StudyAbroad {
  user: User;
  education: Education;
}

export interface Work {
  user: User;
  company: string;
  position: string;
  startYear: string;
  endYear: string;
}

export interface Scholarship {
  user: User;
  organization: string;
  title: string;
  startYear: number;
  endYear: number;
}

export interface SocialLink {
  user: User;
  title: string;
  url: string;
}

export interface City {
  name: string;
  country: Country;
}

export interface Follow {
  follower: User;
  following: User;
}
