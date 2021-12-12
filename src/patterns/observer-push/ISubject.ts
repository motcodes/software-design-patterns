import { IObserver } from './IObserver';

export interface ISubject {
  subscribe: (subscriber: IObserver) => void;
  unsubscribe: (subscriber: IObserver) => void;
  notify: () => void;
}
