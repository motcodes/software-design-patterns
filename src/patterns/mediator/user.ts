import { IMediator } from './IMediator';

export abstract class User {
  public mediator: IMediator;
  public name: string;

  constructor(name: string, mediator: IMediator) {
    this.mediator = mediator;
    this.name = name;
  }

  public abstract sendMessage(message: string): void;
  public abstract receiveMessage(message: string): void;
}
