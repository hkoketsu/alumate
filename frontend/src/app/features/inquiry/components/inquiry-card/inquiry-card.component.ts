import { Component, OnInit, Input } from '@angular/core';
import { Inquiry, InquiryLike, InquiryComment } from './../../models/inquiry.model';

@Component({
  selector: 'app-inquiry-card',
  templateUrl: './inquiry-card.component.html',
  styleUrls: ['./inquiry-card.component.css']
})
export class InquiryCardComponent implements OnInit {
  @Input() inquiry: Inquiry;

  schoolTag: string;
  likes: InquiryLike[];
  comments: InquiryComment[];
  constructor() { }

  ngOnInit(): void {
  }

}
