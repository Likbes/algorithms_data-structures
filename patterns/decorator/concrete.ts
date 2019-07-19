namespace Decorator {
  // which behavoir will be change
  interface Component {
    operation(): string;
  }

  class ConcreteComponent implements Component {
    public operation(): string {
      return 'ConcreteComponent';
    }
  }

  // basic decorator class
  class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
      this.component = component;
    }

    public operation(): string {
      return this.component.operation();
    }
  }

  // usefull behavior
  class ConcreteDecoratorA extends Decorator {
    public operation(): string {
      return `ConcreteDecoratorA(${super.operation()})`;
    }
  }

  // usefull behavior x2
  class ConcreteDecoratorB extends Decorator {
    public operation(): string {
      return `ConcreteDecoratorB(${super.operation()})`;
    }
  }

  (function client() {
    const operation = (c: Component) => console.log(c.operation());
    const component = new ConcreteComponent();
    const decoratorA = new ConcreteDecoratorA(component);
    const decoratorB = new ConcreteDecoratorB(decoratorA);

    console.log('decorated component');
    operation(decoratorB);
  })();
}
