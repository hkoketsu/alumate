import { School, Degree, Education } from '../../../models/account.model';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-education-modal',
  templateUrl: './education-modal.component.html',
  styleUrls: ['./education-modal.component.css']
})
export class EducationModalComponent implements OnInit {
  form: FormGroup;

  schoolOptions: School[];
  degreeOptions: Degree[];

  startYearOptions: number[];
  endYearOptions: number[];


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EducationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Education
    ) {}

  ngOnInit(): void {
    this.schoolOptions = [
      {
        name: 'University of Tokyo'
      },
      {
        name: 'University of British Columbia'
      },
      {
        name: 'University of Stanford'
      },
    ];
    this.degreeOptions = [
      {
        value: 'B',
        displayName: 'Bachelor'
      },
      {
        value: 'M',
        displayName: 'Master'
      },
      {
        value: 'P',
        displayName: 'PhD'
      },
      {
        value: 'O',
        displayName: 'Others'
      },
    ];
    const currentYear = new Date().getFullYear();
    const yearLowerBound = 1980;
    this.startYearOptions = this.generateYearOptions(currentYear - yearLowerBound + 1, yearLowerBound);
    this.endYearOptions = this.generateYearOptions(currentYear - yearLowerBound + 11, yearLowerBound);

    this.form = this.fb.group({
      isStudyAbroad: [],
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

  generateYearOptions(range: number, start: number): number[] {
    return [...Array(range).keys()].map(i => i + start).reverse();
  }
}
