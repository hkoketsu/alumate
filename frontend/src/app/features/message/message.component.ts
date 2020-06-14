import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { Message } from './models/message.model';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  form: FormGroup;

  messages: Message[];

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private messageservice: MessageService,
    ) { }

  ngOnInit(): void {
    this.messageservice.getMessageList().subscribe(
      messages => {
        this.messages = messages
        console.log(messages)
      }
    )
    

    // this.messages = [
    //   {
    //     sender: null,
    //     receiver: null,
    //     body: 'Message description',
    //     created_at: new Date()
    //   },
    //   {
    //     sender: null,
    //     receiver: null,
    //     body: 'Message description',
    //     created_at: new Date()
    //   },
    //   {
    //     sender: null,
    //     receiver: null,
    //     body: 'Message description',
    //     created_at: new Date()
    //   },
    // ];
  }

  openMessageModal(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: true
    };
    this.dialog.open(MessageModalComponent, dialogConfig);
  }
}

