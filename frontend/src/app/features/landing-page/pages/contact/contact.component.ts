import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  sent = false;

  constructor() { }

  ngOnInit(): void {
  }

  submit(submitted: boolean) {
    this.sent = submitted;
  }
}
