import { ISystem } from './ISystem';

export class Linux implements ISystem {
  public startUp = (): void => console.log('Linux is starting');
}

export class Windows implements ISystem {
  public startUp = (): void => console.log('Windows is starting');
}

export class MacOS implements ISystem {
  public startUp = (): void => console.log('MacOS is starting');
}
