import { User } from './user';

export interface IMediator {
  sendMessage: (message: string, user: User) => void;
  addUser: (user: User) => void;
}
