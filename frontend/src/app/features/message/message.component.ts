import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { Message } from './models/message.model';
import { MessageService } from './services/message.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  form: FormGroup;
  messages: any;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private messageservice: MessageService,
    ) { 
      this.messageservice.msgSubject$.subscribe(
        msg => {
          this.getMessages()
        }
      )
    }

  ngOnInit(): void {
    this.getMessages()
  }

  openMessageModal(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: true
    };
    this.dialog.open(MessageModalComponent, dialogConfig);
  }

  addMessage(msg:any) {
    this.messages.push(msg);
  }

  getMessages(){
    this.messageservice.getMessageApi().subscribe(
      api => {
        this.messages = api
      }
    )
  }

}

