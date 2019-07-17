class Prototype {
  public primitive: any;
  public component!: object;
  public circularReference!: ComponentWillBackReference;

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);
    // clone object with back ref
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this }
    };

    return clone;
  }
}

class ComponentWillBackReference {
  public prototype: any;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

(function client() {
  const proto1 = new Prototype();
  proto1.primitive = 123;
  proto1.component = new Date();
  proto1.circularReference = new ComponentWillBackReference(proto1);

  const proto2 = proto1.clone();
  proto1.primitive === proto2.primitive
    ? console.log('Yay. primitives have been copied')
    : console.log('Nope. primitives have not been copied');

  proto1.component === proto2.component
    ? console.log('Nope. component has not been copied')
    : console.log('Yay. component has been copied');

  proto1.circularReference === proto2.circularReference
    ? console.log('Component with back reference has not been cloned.')
    : console.log('Component with back reference has been cloned');

  proto1.circularReference.prototype === proto2.circularReference.prototype
    ? console.log('Component with back reference is linked to original object')
    : console.log('Component with back reference is linked to the clone');

  console.log('proto 1', proto1, '\n proto2', proto2);
})();
