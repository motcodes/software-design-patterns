// Beep as Startegy Behavior

export interface IBeepBehavior {
  StartBeep: () => void;
}

export class Beep implements IBeepBehavior {
  public Attribute: string = 'Beep';

  StartBeep(): void {
    console.log(this.Attribute);
  }
}

export class Sound implements IBeepBehavior {
  public Attribute: string = 'Alert';

  StartBeep(): void {
    console.log(this.Attribute);
  }
}
