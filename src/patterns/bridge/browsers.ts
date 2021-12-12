import { IBrowser } from './IBrowser';

export class Edge implements IBrowser {
  public browseWeb = (): void => console.log('Browsing on Edge');
}

export class Safari implements IBrowser {
  public browseWeb = (): void => console.log('Browsing on Safari');
}

export class Chrome implements IBrowser {
  public browseWeb = (): void => console.log('Browsing on Chrome');
}
