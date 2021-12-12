import { IComponent } from './IComponent';

export class MantisParts implements IComponent {
  public getDescription = () => 'Parts for Mantis robot';
  public getPrice = () => 0.0;
}
