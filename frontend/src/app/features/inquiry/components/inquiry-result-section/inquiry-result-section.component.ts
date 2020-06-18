import { Inquiry } from './../../models/inquiry.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquiry-result-section',
  templateUrl: './inquiry-result-section.component.html',
  styleUrls: ['./inquiry-result-section.component.css']
})
export class InquiryResultSectionComponent implements OnInit {
  searched = false;

  result: Inquiry[][] = [];
  resultCount: number;
  pluralMapping: { [k: string]: string } = {
    '=0': 'results',
    '=1': 'result',
    other: 'results',
  };

  constructor() { }

  ngOnInit(): void {
    this.result = [
      [
        {
          user: {
            id: 1,
            username: 'hkoketsu',
            email: 'hiroki@email.com',
          },
          title: 'title',
          body: 'description',
          created_at: new Date(),
        },
        {
          user: {
            id: 1,
            username: 'hkoketsu',
            email: 'hiroki@email.com',
          },
          title: 'title',
          body: 'description',
          created_at: new Date(),
        }
      ],
      [
        {
          user: {
            id: 1,
            username: 'hkoketsu',
            email: 'hiroki@email.com',
          },
          title: 'title',
          body: 'description',
          created_at: new Date(),
        },
        {
          user: {
            id: 1,
            username: 'hkoketsu',
            email: 'hiroki@email.com',
          },
          title: 'title',
          body: 'description',
          created_at: new Date(),
        },
      ],
      [
        {
          user: {
            id: 1,
            username: 'hkoketsu',
            email: 'hiroki@email.com',
          },
          title: 'title',
          body: 'description',
          created_at: new Date(),
        },
        {
          user: {
            id: 1,
            username: 'hkoketsu',
            email: 'hiroki@email.com',
          },
          title: 'title',
          body: 'description',
          created_at: new Date(),
        }
      ]
    ]
  }

}
