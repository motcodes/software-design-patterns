import { AdapterWizard } from './adapterWizard';
import { Goblin } from './goblin';
import { IEnemyObject } from './IEnemyObject';
import { Wizard } from './wizard';

export function RunAdapter() {
  const goblin: IEnemyObject = new Goblin();
  const wizard: Wizard = new Wizard();
  const adapterWizard: IEnemyObject = new AdapterWizard(wizard);

  console.log('Adapter Pattern: goblin vs wizard');
  goblin.attack();
  goblin.sayHello();
  goblin.sleep();

  console.log();

  adapterWizard.attack();
  adapterWizard.sayHello();
  adapterWizard.sleep();
}
