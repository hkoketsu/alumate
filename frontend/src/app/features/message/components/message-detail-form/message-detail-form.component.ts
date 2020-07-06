import { FormControl, Validators } from '@angular/forms';
import { User } from '../../../auth/models/auth.model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';



@Component({
  selector: 'app-message-detail-form',
  templateUrl: './message-detail-form.component.html',
  styleUrls: ['./message-detail-form.component.css']
})
export class MessageDetailFormComponent implements OnInit {
  receiver: User;
  receiverUserId: number;
  body = new FormControl('', Validators.required);
  selectedFile: File;

  constructor(
    private messageService: MessageService,
    private activatdRoute: ActivatedRoute,
    private authService: AuthService,
  ) {
    this.activatdRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.receiverUserId = +params.get('id');
        this.authService.getUserById(this.receiverUserId).subscribe(
          user => {
            this.receiver = user
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

  onFileChanged(event: { target: HTMLInputElement; }) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  send() {
    if(this.body.valid) {
      console.log(this.body.value)
      this.messageService.postMessage({body: this.body.value, receiver: this.receiverUserId}).subscribe(
        d => {
          this.messageService.update()
        }
      )
    } else {
      console.log('not valid!')
    };
    this.body.reset()
    console.log('send message', this.body.value, this.selectedFile.name);
  }

}
