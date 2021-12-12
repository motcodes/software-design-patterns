import { Decorator } from './Decorator';
import { IComponent } from './IComponent';

export class Motor extends Decorator {
  constructor(roboPart: IComponent) {
    super(roboPart);
  }

  public getDescription = (): string =>
    `${this.roboPart.getDescription()}\n and a servo motor`;

  public getPrice = (): number => this.roboPart.getPrice() + 20.12;
}
