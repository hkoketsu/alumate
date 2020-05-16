import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-chips-input',
  templateUrl: './chips-input.component.html',
  styleUrls: ['./chips-input.component.css']
})
export class ChipsInputComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formControl = new FormControl();
  filteredItems: Observable<any[]>;
  inputItems: string[] = [];
  @Input() existingItems: string[];
  @Output() valueChanged: EventEmitter<string[]> = new EventEmitter();

  @ViewChild('itemsInput') itemsInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredItems = this.formControl.valueChanges.pipe(
      map((item: string | null) =>
        item ? this._filter(item) : this.existingItems.slice()
      )
    );
  }

  ngOnInit(): void {
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.inputItems.push(event.option.viewValue);
    this.itemsInput.nativeElement.value = '';
    this.formControl.setValue(null);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our item
    if ((value || '').trim()) {
      this.inputItems.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.formControl.setValue(null);
    this.valueChanged.emit(this.inputItems);
  }

  remove(item: string): void {
    const index = this.inputItems.indexOf(item);

    if (index >= 0) {
      this.inputItems.splice(index, 1);
    }
    this.valueChanged.emit(this.inputItems);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.existingItems.filter(
      (item) => item.toLowerCase().indexOf(filterValue) === 0
    );
  }

}
