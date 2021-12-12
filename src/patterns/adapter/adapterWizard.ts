import { IEnemyObject } from './IEnemyObject';
import { Wizard } from './wizard';

// this is the adapter class for the wizard
// since the wizard class has other implementaions of these methods
// we need to adapt them to work with the IEnemyObject Interface
export class AdapterWizard implements IEnemyObject {
  private wizard: Wizard = null;

  // we set the wizard class for accessing the wizard methods
  constructor(wiz: Wizard) {
    this.wizard = wiz;
  }

  // in the methods from the interface we then call the specific implementation in the wizard class
  public attack(): void {
    this.wizard.attackPlayer();
  }

  public sayHello(): void {
    this.wizard.communicate();
  }

  public sleep(): void {
    this.wizard.rest();
  }
}
