import { Command } from './command';
import { Setup } from './setup';

export class Start extends Command {
  constructor(setup: Setup) {
    super(setup);
  }

  override execute = (): void => this.setup.start();
  override undo = (): void => this.setup.undo();
}

export class Stop extends Command {
  constructor(setup: Setup) {
    super(setup);
  }

  override execute = (): void => this.setup.stop();
  override undo = (): void => this.setup.undo();
}
