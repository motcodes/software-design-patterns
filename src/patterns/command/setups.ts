import { Setup } from './setup';

export class Lights extends Setup {
  public override start(): void {
    console.log('Turning lights on.');
    this.isRunning = true;
  }

  public override stop(): void {
    console.log('Shutting lights off.');
    this.isRunning = false;
  }

  public override undo = (): void =>
    this.isRunning ? this.stop() : this.start();
}

export class Projector extends Setup {
  public override start(): void {
    console.log('Turning on projector now.');
    this.isRunning = true;
  }

  public override stop(): void {
    console.log('Turning off projector now.');
    this.isRunning = false;
  }

  public override undo = (): void =>
    this.isRunning ? this.stop() : this.start();
}

export class SurroundSound extends Setup {
  public override start(): void {
    console.log('SurroundSound configuration done.');
    this.isRunning = true;
  }

  public override stop(): void {
    console.log('Turning off soundsystem.');
    this.isRunning = false;
  }

  public override undo = (): void =>
    this.isRunning ? this.stop() : this.start();
}
