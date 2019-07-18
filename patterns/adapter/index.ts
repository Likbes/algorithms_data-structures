// target class declare interface that
// client code can work with

class Target {
  public request(): string {
    return 'default target\'s behavior';
  }
}

// adaptee class which contains specific usefull behavior

class Adaptee {
  public specificRequest(): string {
    return '.eetpadA eht fo roivaheb laicepS';
  }
}

class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee
      .specificRequest()
      .split('')
      .reverse()
      .join('');

    return `adapter: translate adaptee: ${result}`;
  }
}

(function client() {
  const request = (target: Target): void => console.log(target.request());

  const target = new Target();
  request(target);

  const adaptee = new Adaptee();
  // request(Adaptee) - cannot work with adaptee

  const adapter = new Adapter(adaptee);
  request(adapter);
})();
