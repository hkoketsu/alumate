import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-study-interest-modal',
  templateUrl: './study-interest-modal.component.html',
  styleUrls: ['./study-interest-modal.component.css']
})
export class StudyInterestModalComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  studyInterestControl = new FormControl();
  filteredStudyInterests: Observable<string[]>;
  studyInterests: string[] = [];
  allStudyInterests: string[] = ['aa', 'bb', 'cc'];

  @ViewChild('studyInterestsInput') studyInterestsInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    public dialogRef: MatDialogRef<StudyInterestModalComponent>
  ) {
    this.filteredStudyInterests = this.studyInterestControl.valueChanges.pipe(
      map((item: string | null) =>
      item ? this._filter(item) : this.allStudyInterests.slice()
      )
    );
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our item
    if ((value || '').trim()) {
      this.studyInterests.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.studyInterestControl.setValue(null);
  }

  remove(item: string): void {
    const index = this.studyInterests.indexOf(item);

    if (index >= 0) {
      this.studyInterests.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.studyInterests.push(event.option.viewValue);
    this.studyInterestsInput.nativeElement.value = '';
    this.studyInterestControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allStudyInterests.filter(
      (studyInterest) => studyInterest.toLowerCase().indexOf(filterValue) === 0
    );
  }

  save(): void {
    this.dialogRef.close(this.studyInterests);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
