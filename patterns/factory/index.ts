interface Product {
  operation(): string;
}

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    // choose factory method to get object-product
    const product = this.factoryMethod();
    return `Creator: worked with ${product.operation()}`;
  }
}

/*
 * Specific Creators override the factory method in order
 * to change the type of the resulting product.
 */

class FirstConcreteCreator extends Creator {
  public factoryMethod(): Product {
    return new FirstConcreteProduct();
  }
}

class SecondConcreteCreator extends Creator {
  public factoryMethod(): Product {
    return new SecondConcreteProduct();
  }
}

/*
 * Specific Products provide various Product interface implementations.
 */

class FirstConcreteProduct implements Product {
  operation(): string {
    return `FirstConcreteProduct`;
  }
}

class SecondConcreteProduct implements Product {
  operation(): string {
    return `SecondConcreteProduct`;
  }
}

function code(creator: Creator) {
  console.log('i dont know creators class');
  console.log(creator.someOperation());
}

code(new FirstConcreteCreator());
code(new SecondConcreteCreator());
