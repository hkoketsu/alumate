import { User } from '../../auth/models/auth.model';

export interface Post {
  user: User;
  body: string;
  created_at: Date;
  image: File;
}

export interface Comment {
  user: User;
  post: Post;
  body: string;
  created_at: Date;
  image: File;
}
