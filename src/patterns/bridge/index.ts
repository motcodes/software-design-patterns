import { Chrome } from './browsers';
import { Computer } from './computer';
import { LaptopWindows } from './LaptopWindows';
import { MacMini } from './MacMini';
import { Linux } from './systems';

export function RunBridge() {
  //Initialising new computer with type MacOSMiniPC and calling all of it's functions once to test if it works
  const macMini: Computer = new MacMini();
  macMini.startUp();
  macMini.getComputerAge();
  macMini.browseWeb();
  console.log();

  //Same as before but now with type WindowsLaptop, to find out if it makes a difference
  const windowsLaptop: LaptopWindows = new LaptopWindows();
  windowsLaptop.startUp();
  windowsLaptop.getComputerAge();
  windowsLaptop.browseWeb();

  //Testing the SwitchOS and SwitchBrowser Methods
  console.log('Switching to linux');
  windowsLaptop.switchOS(new Linux());
  windowsLaptop.startUp();
  windowsLaptop.switchBrowser(new Chrome());
  windowsLaptop.browseWeb();

  console.log();
}
