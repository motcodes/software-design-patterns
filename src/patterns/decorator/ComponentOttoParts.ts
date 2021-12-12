import { IComponent } from './IComponent';

export class OttoParts implements IComponent {
  public getDescription = () => 'Parts for Otto robot';
  public getPrice = () => 0.0;
}
