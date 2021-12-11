// since JavaScript runs on just one thread
// we don't have to implement a thread safe version.

export class Cook {
  private static instance: Cook;
  private Dishes: string[] = ['Ramen', 'Maki', 'Nigiri', 'Mochi'];
  private DishOfTheDay: string = null;

  private constructor() {
    if (Cook.instance) {
      throw new Error('Error - use Singleton.getInstance()');
    }
  }

  static getInstance(): Cook {
    // checks if instance already exists, if not create a new Singleton
    Cook.instance = Cook.instance || new Cook();
    return Cook.instance;
  }

  public SetDishOfTheDay(): void {
    const dishNr: number = Math.floor(Math.random() * this.Dishes.length);
    this.DishOfTheDay = this.Dishes[dishNr];
  }

  public ReadDishOfTheDay = (): string => this.DishOfTheDay;
}

// call it like this
// const cook = Cook.getInstance()
