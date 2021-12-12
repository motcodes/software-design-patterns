import { IMediator } from './IMediator';
import { User } from './user';

export class ChatUser extends User {
  constructor(name: string, mediator: IMediator) {
    super(name, mediator);
  }

  public override receiveMessage = (message: string): void =>
    console.log(`The user ${this.name} has recieved a message: ${message}`);

  public override sendMessage(message: string): void {
    console.log(`${this.name}: ${message}`);
    this.mediator.sendMessage(message, this);
  }
}
