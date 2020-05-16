import { FormControl } from '@angular/forms';
import { User } from '../../../auth/models/auth.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-detail-form',
  templateUrl: './message-detail-form.component.html',
  styleUrls: ['./message-detail-form.component.css']
})
export class MessageDetailFormComponent implements OnInit {
  receiver: User;

  body = new FormControl('');
  selectedFile: File;

  constructor() {
  }

  ngOnInit(): void {
  }

  onFileChanged(event: { target: HTMLInputElement; }) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  send() {
    console.log('send message', this.body.value, this.selectedFile.name);
  }

}
