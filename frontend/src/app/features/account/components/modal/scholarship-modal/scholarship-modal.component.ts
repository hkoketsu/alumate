import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-scholarship-modal',
  templateUrl: './scholarship-modal.component.html',
  styleUrls: ['./scholarship-modal.component.css']
})
export class ScholarshipModalComponent implements OnInit {
  form: FormGroup;

  fromYearOptions: number[];
  untilYearOptions: number[];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ScholarshipModalComponent>,
  ) {}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    const yearLowerBound = 1980;
    this.fromYearOptions = this.generateYearOptions(currentYear - yearLowerBound + 1, yearLowerBound);
    this.untilYearOptions = this.generateYearOptions(currentYear - yearLowerBound + 11, yearLowerBound);

    this.form = this.fb.group({
      organization: [''],
      title: [''],
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
