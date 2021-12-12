import { Beep, IBeepBehavior } from './beepBehavior';
import { Drive, Go, IMoveBehavior } from './movieBehavior';

// Abstract Class which every Robot has to implement
// This is the context Class
export abstract class Robot {
  BeepBehavior: IBeepBehavior = new Beep();
  MoveBehavior: IMoveBehavior = null;

  public SetMoveBehavior(behavior: IMoveBehavior): void {
    this.MoveBehavior = behavior;
  }

  public SetSoundBehavior(behavior: IBeepBehavior): void {
    this.BeepBehavior = behavior;
  }

  public Sense = (): void => console.log('Scanning the environment');

  public StartMove = (): void => this.MoveBehavior.StartMove();

  public StartBeep = (): void => this.BeepBehavior.StartBeep();

  public abstract ShowName(): void;
}

// RoboCar, Mantis, ... inherit the Robot class an implement their own behavior

export class RoboCar extends Robot {
  private readonly Name = 'Robo-Car';

  constructor() {
    super();
    this.SetMoveBehavior(new Drive());
    this.SetSoundBehavior(null);
  }

  public override ShowName(): void {
    console.log('Hello, I am ' + this.Name);
  }
}

export class Mantis extends Robot {
  private readonly Name = 'Mantis';

  public override ShowName(): void {
    console.log('Hello, I am ' + this.Name);
  }
}

export class Otto extends Robot {
  private readonly Name = 'Otto';

  constructor() {
    super();
    this.SetMoveBehavior(new Go());
    this.SetSoundBehavior(new Beep());
  }

  public override ShowName(): void {
    console.log('Hello, I am ' + this.Name);
  }
}

export class Fressomat extends Robot {
  private readonly Name = 'Fressomat';

  constructor() {
    super();
    this.SetMoveBehavior(new Go());
    this.SetSoundBehavior(new Beep());
  }

  public override ShowName(): void {
    console.log('Hello, I am ' + this.Name);
  }
}
