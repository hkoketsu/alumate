import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reply-btn',
  templateUrl: './reply-btn.component.html',
  styleUrls: ['./reply-btn.component.css']
})
export class ReplyBtnComponent implements OnInit {
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
