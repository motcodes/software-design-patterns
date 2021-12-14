import { Command } from './command';
import { Start, Stop } from './commands';
import { RemoteControl } from './remoteControl';
import { Setup } from './setup';
import { Projector, SurroundSound, Lights } from './setups';

export function RunCommand() {
  //Setting up all the recievers for the pattern to work
  const projector: Setup = new Projector();
  const surroundSound: Setup = new SurroundSound();
  const ligths: Setup = new Lights();

  //Turning on the Whole setup
  starting(projector);
  starting(surroundSound);
  starting(ligths);
  //Undoing the last step and then starting it again
  undoing(ligths);
  starting(ligths);

  console.log('\n');
  //Turning on the Whole setup
  stopping(ligths);
  stopping(surroundSound);
  //undoing the last step and then starting it again
  undoing(surroundSound);
  stopping(surroundSound);
  stopping(projector);
}

function starting(setup: Setup) {
  const remote: RemoteControl = new RemoteControl();
  const command: Command = new Start(setup);
  remote.setCommand(command);
  remote.execute();
}

function stopping(setup: Setup) {
  const remote: RemoteControl = new RemoteControl();
  const command: Command = new Stop(setup);
  remote.setCommand(command);
  remote.execute();
}

function undoing(setup: Setup) {
  const remote: RemoteControl = new RemoteControl();
  const command: Command = new Stop(setup);
  remote.setCommand(command);
  remote.undo();
}
