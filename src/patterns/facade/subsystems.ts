export class Distribution {
  wrapPackage = () => console.log('Robot is packed');
  sendPackage = () => console.log('Robot is send out');
}
export class Sales {
  checkHardware = () => console.log('Robot is checked');
  assembleRobot = () => console.log('Robot is assembled and tested');
}

export class Support {
  registerRobot = () => console.log('Robot is online now');
  feedback = () => console.log('Robot is sending feedback');
}

export class Delivery {
  transportPackage = () => console.log('Robot is being delivered');
  handoverPackage = () => console.log('Robot is handed over to customer');
}
