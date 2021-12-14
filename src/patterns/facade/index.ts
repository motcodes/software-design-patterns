import { FacadeRobotMgmt } from './facade';

export function RunFacade() {
  const orderRobot: FacadeRobotMgmt = new FacadeRobotMgmt();
  orderRobot.orderRobot();
}
