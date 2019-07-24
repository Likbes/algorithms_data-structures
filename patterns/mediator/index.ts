// mediator can react on event
// and delegate execution to other components
interface Mediator {
  notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
  private component1: Component1;
  private component2: Component2;

  constructor(c1: Component1, c2: Component2) {
    this.component1 = c1;
    this.component1.setMediator(this);

    this.component2 = c2;
    this.component2.setMediator(this);
  }

  public notify(sender: object, event: string) {
    if (event === 'A') {
      console.log('mediator reacts on A event and trigger operations');
      this.component2.doSomethingC();
    }

    if (event === 'D') {
      console.log('mediator reacts on D event and trigger operations');
      this.component1.doSomethingB();
      this.component2.doSomethingC();
    }
  }
}
// basic functionality to storage instance of mediator
class BaseComponent {
  protected mediator!: Mediator;

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

// concrete components implements different functionalities
class Component1 extends BaseComponent {
  public doSomethingA(): void {
    console.log('component 1 do something a');
    this.mediator.notify(this, 'A');
  }

  public doSomethingB(): void {
    console.log('component 1 do something b');
    this.mediator.notify(this, 'B');
  }
}

class Component2 extends BaseComponent {
  public doSomethingC(): void {
    console.log('component 2 do something c');
    this.mediator.notify(this, 'C');
  }

  public doSomethingD(): void {
    console.log('component 2 do something d');
    this.mediator.notify(this, 'D');
  }
}

const c1 = new Component1();
const c2 = new Component2();

const mediator = new ConcreteMediator(c1, c2);

console.log('client triggers operation A');
c1.doSomethingA();

console.log('\n');

console.log('client triggers operation D');
c2.doSomethingD();
