import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentStatus, Country } from 'src/app/features/account/models/account.model';
import { AccountService } from 'src/app/features/account/services/account.service';

@Component({
  selector: 'app-base-inquiry-form',
  templateUrl: './base-inquiry-form.component.html',
  styleUrls: ['./base-inquiry-form.component.css']
})
export class BaseInquiryFormComponent implements OnInit {
  form: FormGroup;

  statusChoices: CurrentStatus[];
  countryChoices: Country[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.statusChoices = this.accountService.getStatusOptions();
    this.countryChoices = this.accountService.getCountryOptions();
    this.form = this.fb.group({
      name: [''],
      status: [],
      homeCountry: [],
      studyAbroadCountry: []
    });
  }

  next(): void {
    console.log(this.form.value);
    this.router.navigate(['/auth/base-connect']);
  }
}
