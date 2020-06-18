import { Post } from '../../models/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        user: {
          id: 1,
          username: 'hkoketsu',
          email: 'hiroki@email.com',
        },
        body: 'Hi1',
        created_at: new Date(),
        image: null
      },
      {
        user: {
          id: 2,
          username: 'hkoketsu',
          email: 'hiroki@email.com',
        },
        body: 'Hi2',
        created_at: new Date(),
        image: null
      },
      {
        user: {
          id: 3,
          username: 'hkoketsu',
          email: 'hiroki@email.com',
        },
        body: 'Hi3',
        created_at: new Date(),
        image: null
      }
    ];
  }

  onSubmit() {

  }

}
