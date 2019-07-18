class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: base operation ${result}`;
  }
}

// we can extend abstraction without changes in implementation
class ExtendedAbstraction extends Abstraction {
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Extended abstraction: extended operation ${result}`;
  }
}

// implementation establishes an interface for all realization classes
interface Implementation {
  operationImplementation(): string;
}

class SofaImplementation implements Implementation {
  operationImplementation(): string {
    return 'u can lie on sofa';
  }
}

class ChairImplementation implements Implementation {
  operationImplementation(): string {
    return 'u can sit on chair';
  }
}

(function client() {
  const operation = (a: Abstraction): void => console.log(a.operation());

  let imp = new SofaImplementation();
  let abstraction = new Abstraction(imp);
  operation(abstraction);

  console.log('\n');

  imp = new ChairImplementation();
  abstraction = new ExtendedAbstraction(imp);
  operation(abstraction);
})();
