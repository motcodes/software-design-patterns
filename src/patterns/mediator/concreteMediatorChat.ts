import { IMediator } from './IMediator';
import { User } from './user';

export class ChatMediator implements IMediator {
  private userList: Array<User>;
  constructor() {
    this.userList = new Array<User>();
  }

  public addUser(user: User): void {
    this.userList.push(user);
  }

  public sendMessage(message: string, user: User) {
    this.userList.forEach((u: User) => u !== user && u.receiveMessage(message));
  }
}
