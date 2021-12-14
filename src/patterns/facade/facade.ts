import { Delivery, Distribution, Sales, Support } from './subsystems';

export class FacadeRobotMgmt {
  private sales: Sales;
  private dist: Distribution;
  private deliver: Delivery;
  private support: Support;

  constructor() {
    this.sales = new Sales();
    this.dist = new Distribution();
    this.deliver = new Delivery();
    this.support = new Support();
  }

  public orderRobot(): void {
    this.sales.checkHardware();
    this.sales.assembleRobot();

    this.dist.wrapPackage();
    this.dist.sendPackage();

    this.deliver.transportPackage();
    this.deliver.handoverPackage();

    this.support.registerRobot();
    this.support.feedback();
  }
}
