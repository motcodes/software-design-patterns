import { GumballMachine } from './ContextGumballMachine';

export function RunState() {
  const gumballMachine: GumballMachine = new GumballMachine(3);

  gumballMachine.insertCoin();
  gumballMachine.turnHandle();
  console.log('\n');

  gumballMachine.insertCoin();
  gumballMachine.turnHandle();
  gumballMachine.ejectCoin();
  console.log('\n');

  gumballMachine.insertCoin();
  gumballMachine.ejectCoin();
  gumballMachine.turnHandle();
  console.log('\n');

  gumballMachine.turnHandle();
}
