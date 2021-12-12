import { Edge } from './browsers';
import { Computer } from './computer';
import { Windows } from './systems';

export class LaptopWindows extends Computer {
  constructor() {
    super(new Windows(), new Edge(), false);
    console.log('New Windows 11 Laptop with Edge.');
  }
}
