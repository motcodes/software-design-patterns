import { Setup } from './setup';

export abstract class Command {
  setup: Setup;
  constructor(setup: Setup) {
    this.setup = setup;
  }

  abstract execute(): void;
  abstract undo(): void;
}
