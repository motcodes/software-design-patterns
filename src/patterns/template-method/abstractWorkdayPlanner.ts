export abstract class WorkdayPlanner {
  public createWorkday(): void {
    this.wakeUp();
    this.takeShower();
    this.breakfast();

    this.facePeeling();

    this.goToWork();
    this.work();

    this.sleep();
  }

  abstract goToWork(): void;
  abstract work(): void;
  facePeeling(): void {}

  wakeUp = (): void => console.log('\nwaking up...');
  takeShower = (): void => console.log('showering...');
  breakfast = (): void => console.log('eating breakfast...');
  sleep = (): void => console.log('sleeping...');
}
