import { IObserver } from './IObserver';
import { ISubject } from './ISubject';

export class ConcreteSubject implements ISubject {
  private info: string;
  private observers: Array<IObserver> = new Array<IObserver>();

  public subscribe(subscriber: IObserver): void {
    console.log('added subscriber');
    this.observers.push(subscriber);
  }
  public unsubscribe(subscriber: IObserver): void {
    console.log('removed subscriber');
    this.observers.splice(
      this.observers.findIndex((sub) => sub === subscriber),
      1
    );
  }

  public notify(): void {
    console.log('\nNotifying subscribers');
    this.observers.forEach((observer) => observer.update(this.info));
    console.log();
  }

  public SetInfo = (info: string) => (this.info = info);
}
