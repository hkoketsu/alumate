import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-social-link-modal',
  templateUrl: './social-link-modal.component.html',
  styleUrls: ['./social-link-modal.component.css']
})
export class SocialLinkModalComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SocialLinkModalComponent>,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [''],
      url: ['']
    });
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
