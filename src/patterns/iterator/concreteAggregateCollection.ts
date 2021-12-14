import { Aggregate } from './aggregateColletion';
import { ConcreteIterator } from './concreteIterator';
import { IIterator } from './IIterator';
import { Student } from './student';

export class Collection implements Aggregate {
  list: Array<Student> = new Array<Student>();

  createIterator = (): IIterator => new ConcreteIterator(this);

  count = (): number => this.list.length;
  addStudent = (student: Student) => this.list.push(student);
  getStudent = (index: number): Student => this.list[index];
  removeStudent = (student: Student) =>
    this.list.splice(
      this.list.findIndex((std) => std === student),
      1
    );
}
