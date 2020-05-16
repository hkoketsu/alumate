import { User } from '../../auth/models/auth.model';

export interface Message {
  sender: User;
  receiver: User;
  body: string;
  created_at: Date;
}
