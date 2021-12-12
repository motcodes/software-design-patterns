import { Safari } from './browsers';
import { Computer } from './computer';
import { MacOS } from './systems';

export class MacMini extends Computer {
  constructor() {
    super(new MacOS(), new Safari(), true);
    console.log('New MacOS Mac Mini with Safari.');
  }
}
