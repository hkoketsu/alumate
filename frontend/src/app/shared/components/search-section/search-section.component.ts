import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SliderValues } from '../input/slider-input/slider-input.component';
import { CurrentStatus } from 'src/app/features/account/models/account.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  // for auto completes; fetch from backend
  statusChoices: CurrentStatus[];
  countryChoices: string[];
  schoolChoices: string[];
  majorChoices: string[];

  // filtering conditions
  selectedStatus: CurrentStatus[] = [];
  homeCountryTags: string[] = [];
  studyAbroadCountryTags: string[] = [];
  schoolTags: string[] = [];
  majorTags: string[] = [];
  startYearRange: SliderValues;
  endYearRange: SliderValues;

  @Output() updateClicked: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // mock data
    this.statusChoices = [
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
    this.majorChoices = ['Arts', 'Science', 'Business'];
    this.countryChoices = ['Japan', 'USA', 'Canada'];
    this.schoolChoices = ['UBC', 'UT', 'SFU'];
  }

  onStatusCheckboxChange(status: CurrentStatus, isChecked: boolean) {
    if (isChecked) {
      this.selectedStatus.push(status);
    } else {
      const index = this.selectedStatus.findIndex(x => x.value === status.value);
      this.selectedStatus.slice(index, 1);
    }
  }

  applyChange(): void {
    const filter = {
      selectedStatus: this.selectedStatus,
      homeCountryTags: this.homeCountryTags,
      studyAbroadCountryTags: this.studyAbroadCountryTags,
      schoolTags: this.schoolTags,
      majorTags: this.majorTags,
      startYearRange: this.startYearRange,
      endYearRange: this.endYearRange
    };
    console.log(filter);
    this.updateClicked.emit(filter);
  }

  onHomeCountryTagsChanged(newTags: string[]) {
    this.homeCountryTags = newTags;
  }

  onStudyAbroadCountryTagsChanged(newTags: string[]) {
    this.studyAbroadCountryTags = newTags;
  }

  onSchoolTagsChanged(newTags: string[]) {
    this.schoolTags = newTags;
  }

  onMajorTagsChanged(newTags: string[]) {
    this.majorTags = newTags;
  }

  onStartYearRangeChanged(newRange: SliderValues) {
    this.startYearRange = newRange;
  }

  onEndYearRangeChanged(newRange: SliderValues) {
    this.endYearRange = newRange;
  }
}
