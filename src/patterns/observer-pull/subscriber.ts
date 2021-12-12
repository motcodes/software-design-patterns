import { ConcreteSubject } from './concreteSubject';
import { IObserver } from './IObserver';
import { ISubject } from './ISubject';

export class Subscriber implements IObserver {
  private name: string;
  private state: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(subject: ISubject): void {
    if (subject instanceof ConcreteSubject) this.state = subject.GetInfo();
    console.log(`\t${this.name}: ${this.state}\n`);
  }
}
