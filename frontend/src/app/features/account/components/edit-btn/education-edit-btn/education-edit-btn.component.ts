import { Component, OnInit } from '@angular/core';
import { Education } from '../../../models/account.model';

@Component({
  selector: 'app-education-edit-btn',
  templateUrl: './education-edit-btn.component.html',
  styleUrls: ['./education-edit-btn.component.css']
})
export class EducationEditBtnComponent implements OnInit {
  education: Education;

  constructor() { }

  ngOnInit(): void {
  }

}
