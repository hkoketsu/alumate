import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-image-edit-btn',
  templateUrl: './profile-image-edit-btn.component.html',
  styleUrls: ['./profile-image-edit-btn.component.css']
})
export class ProfileImageEditBtnComponent implements OnInit {
  @Input() showButton = true;

  constructor() { }

  ngOnInit(): void {
  }

  onHover() {
    this.showButton = true;
  }


}
