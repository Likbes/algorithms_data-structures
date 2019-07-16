namespace AbstractFactoryProducts {
  interface AbstractFactory {
    createSofa(): SofaAbstract;
    createChair(): ChairAbstract;
  }

  /*
   * Specific Creators override the factory method in order
   * to change the type of the resulting product.
   */

  class FirstConcreteFactory implements AbstractFactory {
    public createSofa(): SofaAbstract {
      return new FirstConcreteSofa();
    }

    public createChair(): ChairAbstract {
      return new FirstConcreteChair();
    }
  }

  class SecondConcreteFactory implements AbstractFactory {
    public createSofa(): SofaAbstract {
      return new SecondConcreteSofa();
    }

    public createChair(): ChairAbstract {
      return new SecondConcreteChair();
    }
  }

  // chair products

  interface ChairAbstract {
    sit(): string;
  }

  class FirstConcreteChair implements ChairAbstract {
    public sit(): string {
      return 'The result of the first chair variation method.';
    }
  }

  class SecondConcreteChair implements ChairAbstract {
    public sit(): string {
      return 'The result of the second chair variation method.';
    }
  }

  // sofa products

  interface SofaAbstract {
    lie(): string;
    sit(collaborator: ChairAbstract): string;
  }

  class FirstConcreteSofa implements SofaAbstract {
    public lie(): string {
      return 'The result of the first sofa variation method.';
    }

    public sit(collaborator: ChairAbstract) {
      const result = collaborator.sit();
      return `The result of the first sofa collaborating with the (${result})`;
    }
  }

  class SecondConcreteSofa implements SofaAbstract {
    public lie(): string {
      return 'The result of the second sofa variation method.';
    }

    public sit(collaborator: ChairAbstract) {
      const result = collaborator.sit();
      return `The result of the second sofa collaborating with the (${result})`;
    }
  }

  function client(factory: AbstractFactory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();

    console.log(sofa.lie());
    console.log(sofa.sit(chair));
  }

  console.log('Testing with first factory');
  client(new FirstConcreteFactory());

  console.log('////////');

  console.log('Testing with second factory');
  client(new SecondConcreteFactory());
}
