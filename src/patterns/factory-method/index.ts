import { ConcreteCreator, Creator } from './creator';
import { Item } from './item';

export function RunFactory() {
  const creator: Creator = new ConcreteCreator();
  const item: Item = creator.factoryMethod('The Item', 0, 200);
  const item2: Item = creator.factoryMethod('The epic Item', 1, 440);
  item.useItems();
  item2.useItems();
}
