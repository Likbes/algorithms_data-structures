namespace TemplateMethod {
  // abstract class with skeleton algorithm method
  abstract class AbstractClass {
    public templateMethod(): void {
      this.baseOperation1();
      this.requiredOperation1();
      this.baseOperation2();
      this.hook1();
      this.requiredOperation2();
      this.baseOperation3();
      this.hook2();
    }

    protected baseOperation1(): void {
      console.log('AbstractClass says: I am doing the bulk of the work');
    }

    protected baseOperation2(): void {
      console.log(
        'AbstractClass says: But I let subclasses override some operations'
      );
    }

    protected baseOperation3(): void {
      console.log(
        'AbstractClass says: But I am doing the bulk of the work anyway'
      );
    }

    // operations for subclasses
    protected abstract requiredOperation1(): void;
    protected abstract requiredOperation2(): void;

    // optional for subclasses to overwrite hooks
    protected hook1(): void {}
    protected hook2(): void {}
  }

  class ClassA extends AbstractClass {
    protected requiredOperation1(): void {
      console.log('classA: implemented operation 1');
    }

    protected requiredOperation2(): void {
      console.log('classA: implemented operation 2');
    }
  }

  class ClassB extends AbstractClass {
    protected requiredOperation1(): void {
      console.log('classB: implemented operation 1');
    }

    protected requiredOperation2(): void {
      console.log('classB: implemented operation 2');
    }

    protected hook1(): void {
      console.log('classB: implemented hook 1');
    }
  }

  const doTempMeth = (c: AbstractClass) => c.templateMethod();

  console.log('same client code can work with different subclasses:');
  doTempMeth(new ClassA());
  console.log('');

  console.log('same client code can work with different subclasses:');
  doTempMeth(new ClassB());
}
