// since JavaScript runs on just one thread
// we don't have to implement a thread safe version.

export class Singleton {
  private static instance: Singleton;
  //Assign "new Singleton()" here to avoid lazy initialisation

  private constructor() {
    if (Singleton.instance) {
      throw new Error('Error - use Singleton.getInstance()');
    }
    this.member = 0;
  }

  static getInstance(): Singleton {
    // checks if instance already exists, if not create a new Singleton
    Singleton.instance = Singleton.instance || new Singleton();
    return Singleton.instance;
  }

  member: number;
}

// call it like this
// const singleton = Singleton.getInstance()
