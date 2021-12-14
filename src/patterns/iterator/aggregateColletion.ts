import { IIterator } from './IIterator';

export abstract class Aggregate {
  abstract createIterator(): IIterator;
}
