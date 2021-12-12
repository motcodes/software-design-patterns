// Move as Startegy Behavior

export interface IMoveBehavior {
  StartMove: () => void;
}

export class Go implements IMoveBehavior {
  public Attribute: string = 'Walk';

  StartMove(): void {
    console.log(this.Attribute);
  }
}

export class Drive implements IMoveBehavior {
  public Attribute: string = 'Drive';

  StartMove(): void {
    console.log(this.Attribute);
  }
}

export class RocketPower implements IMoveBehavior {
  public Attribute: string = 'Rocket Engine goes brrrrr';

  StartMove(): void {
    console.log(this.Attribute);
  }
}

export class NoGo implements IMoveBehavior {
  public Attribute: string = 'NoGo';

  StartMove(): void {
    console.log(this.Attribute);
  }
}
