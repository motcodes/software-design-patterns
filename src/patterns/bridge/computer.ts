import { IBrowser } from './IBrowser';
import { ISystem } from './ISystem';

export abstract class Computer {
  protected os: ISystem;
  protected browser: IBrowser;
  public isNewComputer: boolean;

  constructor(os: ISystem, browser: IBrowser, isNewComputer: boolean) {
    this.os = os;
    this.browser = browser;
    this.isNewComputer = isNewComputer;
  }

  public startUp = (): void => this.os.startUp();

  public browseWeb = (): void => this.browser.browseWeb();

  public getComputerAge = (): void =>
    this.isNewComputer
      ? console.log('Computer is new')
      : console.log('Computer is used');

  public switchOS = (newOS: ISystem) => (this.os = newOS);

  public switchBrowser = (newBrowser: IBrowser) => (this.browser = newBrowser);
}
