import {
  HasCoinState,
  IState,
  NoCoinState,
  NoGumballState,
  PutOutGumballState,
} from './states';

export class GumballMachine {
  // all State so we can access them in the State classes
  noGumballState: IState;
  noCoinState: IState;
  hasCoinState: IState;
  putOutGumState: IState;
  // global state
  private state: IState;
  public gumballCount: number = 0;

  constructor(gumballCount: number = 3) {
    this.noCoinState = new NoCoinState(this);
    this.hasCoinState = new HasCoinState(this);
    this.putOutGumState = new PutOutGumballState(this);
    this.noGumballState = new NoGumballState(this);

    // setting the gumball count
    // if there are no gumballs left,
    // then the state gets immediately set to noGumballState.
    this.gumballCount = gumballCount;
    if (gumballCount > 0) {
      this.state = this.noCoinState;
    } else {
      this.state = this.noGumballState;
    }
  }

  // setter for global state
  public setState(state: IState): void {
    this.state = state;
  }

  public putOutGum(): void {
    if (this.gumballCount > 0) {
      this.gumballCount--;
    }
  }

  // Actions
  public insertCoin(): void {
    this.state.insertCoin();
  }
  public ejectCoin(): void {
    this.state.ejectCoin();
  }
  public turnHandle(): void {
    this.state.turnHandle();
    this.state.putOutGumball();
  }
}
