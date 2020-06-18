import { startWith, map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AccountService } from './../../../services/account.service';
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
  statusChoices: CurrentStatus[];
  filteredHomeCountryOptions: Country[];
  filteredStudyAbroadCountryOptions: Country[];

  countries: Country[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BasicInfoModalComponent>,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.statusChoices = this.accountService.getStatusOptions();

    this.form = this.fb.group({
      name: [''],
      status: [],
      homeCountry: [],
      studyAbroadCountry: []
    });

    this.accountService.getCountries().subscribe(data => {
      this.countries = data;
    });

    this.homeCountry.valueChanges
      .subscribe((value: string) => {
        if (value && value.length > 1) {
          this.filteredHomeCountryOptions = this._filter(value);
        }
      });
    this.studyAbroadCountry.valueChanges
      .subscribe((value: string) => {
        if (value && value.length > 1) {
          console.log('study abroad filter', value);
          this.filteredStudyAbroadCountryOptions = this._filter(value);
        }
      });
  }

  submit(): void {
    const formValues = this.form.value;
    const homeCountry = this.countries.filter(
      (value: Country) => value.name == formValues.homeCountry)[0];
    const studyAbroadCountry = this.countries.filter(
      (value: Country) => value.name == formValues.studyAbroadCountry)[0];
    this.accountService.sendBasicInfo(formValues.name, formValues.status, homeCountry, studyAbroadCountry);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  get homeCountry() {
    return this.form.get('homeCountry');
  }

  get studyAbroadCountry() {
    return this.form.get('studyAbroadCountry');
  }

  private _filter(value: string): Country[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
