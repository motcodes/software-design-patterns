import { Student } from './student';

export interface IIterator {
  first: () => Student;
  next: () => Student;
  randomNext: () => Student;
  isCompleted: () => boolean;
}
