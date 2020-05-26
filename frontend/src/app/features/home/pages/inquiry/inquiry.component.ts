import { Inquiry } from '../../../inquiry/models/inquiry.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { concat, Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css'],
})
export class InquiryComponent implements OnInit {
  inquiries: Inquiry[] = [];

  constructor() {}

  ngOnInit(): void {

  }
}
