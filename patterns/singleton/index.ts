class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public usefullMethod() {}
}

function client() {
  const singleton = Singleton.getInstance();
  const alsoSingleton = Singleton.getInstance();

  if (singleton === alsoSingleton) console.log('singleton works');
  else console.log('oh god u cannot even write workable singleton');
}

client();
