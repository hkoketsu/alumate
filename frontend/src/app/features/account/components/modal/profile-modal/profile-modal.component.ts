import { Gender } from '../../../models/account.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {
  form: FormGroup;

  genderOptions: Gender[] = [
    {
      value: 'M',
      displayName: 'Male'
    },
    {
      value: 'F',
      displayName: 'Female'
    },
    {
      value: 'NB',
      displayName: 'Genderqueer/Non-Binary'
    },
    {
      value: 'NA',
      displayName: 'Prefer not to disclose'
    },

  ];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProfileModalComponent>,
    ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      gender: [],
      birthday: [''],
    });
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
