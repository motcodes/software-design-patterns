import { GumballMachine } from './ContextGumballMachine';

export interface IState {
  insertCoin: () => void;
  ejectCoin: () => void;
  turnHandle: () => void;
  putOutGumball: () => void;
}

// State Implementations
export class NoCoinState implements IState {
  gumballMachine: GumballMachine;

  constructor(gbm: GumballMachine) {
    this.gumballMachine = gbm;
  }
  public insertCoin(): void {
    console.log('Inserting a coin');
    this.gumballMachine.setState(this.gumballMachine.hasCoinState);
  }
  public ejectCoin(): void {
    console.log('No coin to eject');
  }
  public turnHandle(): void {
    console.log('Turned handle but there is no coin');
  }
  public putOutGumball(): void {
    console.log('Put coin in first');
  }
}

export class HasCoinState implements IState {
  gumballMachine: GumballMachine;

  constructor(gbm: GumballMachine) {
    this.gumballMachine = gbm;
  }
  public insertCoin(): void {
    console.log("You can't insert more coins");
  }
  public ejectCoin(): void {
    console.log('ejecting coin');
    this.gumballMachine.setState(this.gumballMachine.noCoinState);
  }
  public turnHandle(): void {
    console.log('Turning handle');
    this.gumballMachine.setState(this.gumballMachine.putOutGumState);
  }
  public putOutGumball(): void {
    console.log('Put coin in first');
  }
}

export class NoGumballState implements IState {
  gumballMachine: GumballMachine;

  constructor(gbm: GumballMachine) {
    this.gumballMachine = gbm;
  }
  public insertCoin(): void {
    console.log("You can insert a coin but you don't get a gumball");
  }
  public ejectCoin(): void {
    console.log('no coin to eject');
  }
  public turnHandle(): void {
    console.log('Turned handle but there are no gumballs');
  }
  public putOutGumball(): void {
    console.log('Out of gumballs');
  }
}

export class PutOutGumballState implements IState {
  gumballMachine: GumballMachine;

  constructor(gbm: GumballMachine) {
    this.gumballMachine = gbm;
  }
  public insertCoin(): void {
    console.log('putting out gumball');
  }
  public ejectCoin(): void {
    console.log('no refunds');
  }
  public turnHandle(): void {
    console.log('already turned handle');
  }
  public putOutGumball(): void {
    this.gumballMachine.putOutGum();
    if (this.gumballMachine.gumballCount > 0) {
      console.log('Putting out a gumball');
      this.gumballMachine.setState(this.gumballMachine.noCoinState);
    } else {
      console.log('Out of gumballs');
      this.gumballMachine.setState(this.gumballMachine.noGumballState);
    }
  }
}
