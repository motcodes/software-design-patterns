import { ConcreteSubject } from './concreteSubject';
import { Subscriber } from './subscriber';

export function RunObserverPush() {
  const mario: Subscriber = new Subscriber('mario');
  const luigi: Subscriber = new Subscriber('luigi');
  const yoshi: Subscriber = new Subscriber('yoshi');
  const bowser: Subscriber = new Subscriber('bowser');

  const newsletter: ConcreteSubject = new ConcreteSubject();
  newsletter.subscribe(mario);
  newsletter.subscribe(luigi);
  newsletter.subscribe(yoshi);

  newsletter.SetInfo('new Mushrooms with more power');
  newsletter.notify();

  newsletter.unsubscribe(luigi);

  newsletter.SetInfo('new Mushrooms arraive next week');
  newsletter.notify();

  newsletter.subscribe(bowser);

  newsletter.SetInfo('Here is a 10% gift coupon');
  newsletter.notify();

  newsletter.unsubscribe(mario);
  newsletter.unsubscribe(yoshi);

  newsletter.SetInfo('new Mushroom collection to strong');
  newsletter.notify();
}
