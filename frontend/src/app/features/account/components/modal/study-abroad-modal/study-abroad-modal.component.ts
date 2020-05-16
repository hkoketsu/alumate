import { StudyAbroad, School, Degree } from '../../../models/account.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-study-abroad-modal',
  templateUrl: './study-abroad-modal.component.html',
  styleUrls: ['./study-abroad-modal.component.css']
})
export class StudyAbroadModalComponent implements OnInit {
  form: FormGroup;

  schoolOptions: School[];
  degreeOptions: Degree[];

  startYearOptions: number[];
  endYearOptions: number[];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StudyAbroadModalComponent>,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      school: [''],
      degree: [],
      major: [''],
      from: [],
      until: []
    });
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
