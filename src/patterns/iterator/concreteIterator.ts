import { Collection } from './concreteAggregateCollection';
import { IIterator } from './IIterator';
import { Student } from './student';

export class ConcreteIterator implements IIterator {
  collection: Collection;
  private usedEntries: Array<number> = new Array<number>();
  private current: number = 0;

  constructor(collection: Collection) {
    this.current = 0;
    this.collection = collection;
  }

  first(): Student {
    this.current = 0;
    return this.collection.getStudent(0);
  }

  next(): Student {
    this.current++;
    return !this.isCompleted()
      ? this.collection.getStudent(this.current)
      : null;
  }
  randomNext(): Student {
    let isRandomIndex: boolean = false;
    let randomIndex: number;
    while (!isRandomIndex) {
      randomIndex = this.getRandomIndex();
      if (this.usedEntries.every((entry: number) => entry !== randomIndex)) {
        this.usedEntries.push(randomIndex);
        this.current++;
        isRandomIndex = true;
      } else {
        continue;
      }
    }
    return !(this.usedEntries.length >= this.collection.count())
      ? this.collection.getStudent(randomIndex)
      : null;
  }

  private getRandomIndex = (): number =>
    Math.floor(Math.random() * this.collection.count());

  isCompleted = (): boolean => this.current >= this.collection.count();
}
