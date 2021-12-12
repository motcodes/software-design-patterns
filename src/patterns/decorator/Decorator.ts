import { IComponent } from './IComponent';

export abstract class Decorator implements IComponent {
  protected roboPart: IComponent;

  constructor(roboPart: IComponent) {
    this.roboPart = roboPart;
  }

  public getDescription = (): string =>
    this.roboPart ? this.roboPart.getDescription() : '';

  public getPrice = (): number =>
    this.roboPart ? this.roboPart.getPrice() : 0;
}
