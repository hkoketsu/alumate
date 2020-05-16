import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  body = new FormControl();
  selectedFile: File;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.body.value);
  }

  onFileChanged(event: { target: HTMLInputElement; }) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
}
