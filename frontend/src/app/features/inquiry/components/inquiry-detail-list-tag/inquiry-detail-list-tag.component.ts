import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../../models/inquiry.model';

@Component({
  selector: 'app-inquiry-detail-list-tag',
  templateUrl: './inquiry-detail-list-tag.component.html',
  styleUrls: ['./inquiry-detail-list-tag.component.css']
})
export class InquiryDetailListTagComponent implements OnInit {
  @Input() labelName: string;
  @Input() tags: Tag[];

  constructor() { }

  ngOnInit(): void {
  }

}
