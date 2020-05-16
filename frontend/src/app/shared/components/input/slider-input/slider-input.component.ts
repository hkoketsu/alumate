import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Options } from 'ng5-slider';

export interface SliderValues {
  lowerBound: number;
  upperBound: number;
}
@Component({
  selector: 'app-slider-input',
  templateUrl: './slider-input.component.html',
  styleUrls: ['./slider-input.component.css']
})
export class SliderInputComponent implements OnInit {
  @Input() lowerBound = 1980;
  @Input() upperBound = 2030;
  @Input() sliderName: string;

  @Output() sliderValuesChanged = new EventEmitter<SliderValues>();

  sliderForm: FormGroup = new FormGroup({
    range: new FormControl([this.lowerBound, this.upperBound])
  });

  sliderOptions: Options = {
    floor: this.lowerBound,
    ceil: this.upperBound,
    animate: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  updateSlider() {
    console.log(this.sliderForm.value.range);
    const range: SliderValues = {
      lowerBound: this.sliderForm.value.range[0],
      upperBound: this.sliderForm.value.range[1]
    };
    this.sliderValuesChanged.emit(range);
  }
}
