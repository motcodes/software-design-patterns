export abstract class Setup {
  protected isRunning: boolean = false;
  abstract start(): void;
  abstract stop(): void;
  abstract undo(): void;
}
