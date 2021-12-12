import { Item, Shield, Sword } from './item';

export abstract class Creator {
  public factoryMethod(_name: string, _id: number, _value: number): Item {
    return null;
  }
}

export class ConcreteCreator extends Creator {
  public override factoryMethod(name: string, id: number, value: number): Item {
    //Creating a random number to determin what type is selected
    const rndNumber: number = Math.floor(Math.random() * 2);
    //If the random number is 1 a Shield is created otherwise a Sword gets created
    if (rndNumber == 1) {
      return new Shield(name + ' Shield', id, value);
    } else {
      return new Sword(name + ' Sword', id, value);
    }
  }
}
