import { Collection } from './concreteAggregateCollection';
import { IIterator } from './IIterator';
import { Student } from './student';

export function RunIterator() {
  const names = [
    'Anna',
    'Araz',
    'Benjamin',
    'Bernadette',
    'Claudia',
    'Daniel',
    'Elizaveta',
    'Juliane',
    'Kerstin',
    'Lisa',
    'Matthias',
    'Markus',
    'Martin',
    'Maximilian',
    'Pascal',
    'Sebastian',
    'Tanja',
    'Vanessa',
  ];

  const collection: Collection = new Collection();

  names.forEach((name: string) => collection.addStudent(new Student(name)));

  const iterator: IIterator = collection.createIterator();

  for (
    let std: Student = iterator.randomNext();
    !iterator.isCompleted();
    std = iterator.randomNext()
  ) {
    console.log(`Name : ${std.name}`);
  }
}
