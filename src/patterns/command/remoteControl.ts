import { Command } from './command';

export class RemoteControl {
  command: Command;
  public setCommand(command: Command) {
    this.command = command;
  }

  public execute = (): void => this.command.execute();
  public undo = (): void => this.command.undo();
}
