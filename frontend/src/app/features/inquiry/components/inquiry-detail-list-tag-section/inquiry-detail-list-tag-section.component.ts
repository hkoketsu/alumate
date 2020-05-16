import { Tag, Inquiry } from '../../models/inquiry.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inquiry-detail-list-tag-section',
  templateUrl: './inquiry-detail-list-tag-section.component.html',
  styleUrls: ['./inquiry-detail-list-tag-section.component.css']
})
export class InquiryDetailListTagSectionComponent implements OnInit {
  @Input() inquiry: Inquiry;

  statusTags: Tag[];
  homeCountryTags: Tag[];
  studyAbroadCountryTags: Tag[];
  schoolTags: Tag[];
  majorTags: Tag[];
  schoolStartYearTags: Tag[];
  schoolEndYearTags: Tag[];

  constructor() { }

  ngOnInit(): void {
  }

}
