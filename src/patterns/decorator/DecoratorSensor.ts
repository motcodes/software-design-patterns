import { Decorator } from './Decorator';
import { IComponent } from './IComponent';

export class Sensor extends Decorator {
  constructor(roboPart: IComponent) {
    super(roboPart);
  }

  public getDescription = (): string =>
    `${this.roboPart.getDescription()}\n and a sensor`;

  public getPrice = (): number => this.roboPart.getPrice() + 6.5;
}
