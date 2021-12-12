import { Decorator } from './Decorator';
import { IComponent } from './IComponent';

export class Microcontroller extends Decorator {
  constructor(roboPart: IComponent) {
    super(roboPart);
  }

  public getDescription = (): string =>
    `${this.roboPart.getDescription()}\n and a microcontroller`;

  public getPrice = (): number => this.roboPart.getPrice() + 5.99;
}
