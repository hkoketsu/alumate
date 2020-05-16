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
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-goal-modal',
  templateUrl: './goal-modal.component.html',
  styleUrls: ['./goal-modal.component.css'],
})
export class GoalModalComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  goalControl = new FormControl();
  filteredGoals: Observable<string[]>;
  goals: string[] = [];
  allGoals: string[] = ['aa', 'bb', 'cc'];

  @ViewChild('goalsInput') goalsInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    public dialogRef: MatDialogRef<GoalModalComponent>
  ) {
    this.filteredGoals = this.goalControl.valueChanges.pipe(
      map((item: string | null) =>
      item ? this._filter(item) : this.allGoals.slice()
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
      this.goals.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.goalControl.setValue(null);
  }

  remove(item: string): void {
    const index = this.goals.indexOf(item);

    if (index >= 0) {
      this.goals.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.goals.push(event.option.viewValue);
    this.goalsInput.nativeElement.value = '';
    this.goalControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allGoals.filter(
      (goal) => goal.toLowerCase().indexOf(filterValue) === 0
    );
  }

  save(): void {
    this.dialogRef.close(this.goals);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
