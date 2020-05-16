import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-btn',
  templateUrl: './like-btn.component.html',
  styleUrls: ['./like-btn.component.css']
})
export class LikeBtnComponent implements OnInit {
  count = 0;
  isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

}
