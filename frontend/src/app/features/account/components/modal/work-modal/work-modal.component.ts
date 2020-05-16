import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Work } from '../../../models/account.model';

@Component({
  selector: 'app-work-modal',
  templateUrl: './work-modal.component.html',
  styleUrls: ['./work-modal.component.css']
})
export class WorkModalComponent implements OnInit {
  form: FormGroup;

  fromYearOptions: number[];
  untilYearOptions: number[];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<WorkModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Work
    ) {}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 40;
    this.fromYearOptions = this.generateYearOptions(currentYear - startYear + 1, startYear);
    this.untilYearOptions = this.generateYearOptions(currentYear - startYear + 1, startYear);
    this.form = this.fb.group({
      company: [''],
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
