import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  filter: any;

  constructor() { }

  ngOnInit(): void {
  }

  updateResult(filter: any) {
    console.log('people component', filter);
    this.filter = filter;
  }

}
