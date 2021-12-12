import { Cook } from './cook';

export function RunSingleton() {
  const cook1: Cook = Cook.getInstance();
  const cook2: Cook = Cook.getInstance();

  cook1.SetDishOfTheDay();

  console.log('cook 1 Tagesgericht: ' + cook1.ReadDishOfTheDay());
  console.log('cook 2 Tagesgericht: ' + cook2.ReadDishOfTheDay());
}
