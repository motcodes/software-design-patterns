export abstract class Item {
  public name: string;
  public id: number;

  public abstract useItems(): void;
}

export class Shield extends Item {
  public defenseValue: number;

  //Custom Creator to set the values for the properties
  constructor(
    shieldName: string,
    shieldId: number,
    shieldDefenseValue: number
  ) {
    super();
    this.name = shieldName;
    this.id = shieldId;
    this.defenseValue = shieldDefenseValue;
  }

  public override useItems(): void {
    console.log(
      `name: ${this.name}\nid: ${this.id}\ndefenese value: ${this.defenseValue}`
    );
  }
}

export class Sword extends Item {
  public attackValue: number;

  //Custom Creator to set the values for the properties
  constructor(swordName: string, swordId: number, swordDefenseValue: number) {
    super();
    this.name = swordName;
    this.id = swordId;
    this.attackValue = swordDefenseValue;
  }

  public override useItems(): void {
    console.log(
      `name: ${this.name}\nid: ${this.id}\nattack value: ${this.attackValue}`
    );
  }
}
