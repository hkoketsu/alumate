import { BasicInfo, Country, CurrentStatus } from '../../../models/account.model';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-basic-info-modal',
  templateUrl: './basic-info-modal.component.html',
  styleUrls: ['./basic-info-modal.component.css']
})
export class BasicInfoModalComponent implements OnInit {
  form: FormGroup;
  statusChoices: CurrentStatus[] = [
    {
      value: 'FU',
      displayName: 'Future Student'
    },
    {
      value: 'CU',
      displayName: 'Current Student'
    },
    {
      value: 'AL',
      displayName: 'Alumni'
    },
  ];
  countryChoices: Country[] = [
    {
      name: 'Japan'
    },
    {
      name: 'USA'
    }
  ];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BasicInfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BasicInfo
    ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      status: [],
      homeCountry: [],
      studyAbroadCountry: []
    });
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
