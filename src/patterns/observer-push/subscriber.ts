import { IObserver } from './IObserver';

export class Subscriber implements IObserver {
  private name: string;
  private state: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(message: string): void {
    this.state = message;
    console.log(`\t${this.name}: ${this.state}\n`);
  }
}
