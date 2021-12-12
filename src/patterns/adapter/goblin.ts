import { IEnemyObject } from './IEnemyObject';

export class Goblin implements IEnemyObject {
  public attack(): void {
    console.log('The goblin attacks');
  }

  public sayHello(): void {
    console.log('The goblin says hi');
  }

  public sleep(): void {
    console.log('The goblin goes to sleep');
  }
}
