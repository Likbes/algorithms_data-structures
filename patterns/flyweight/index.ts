namespace Flyweight {
  // common part of state
  class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
      this.sharedState = sharedState;
    }

    public operation(uniqueState: any): void {
      const shared = JSON.stringify(this.sharedState);
      const unique = JSON.stringify(uniqueState);

      console.log(`flyweight: shared: ${shared} and unique ${unique}`);
    }
  }

  // factory creates flyweight-objects
  class FlyweightFactory {
    private flyweights: { [ket: string]: Flyweight } = <any>{};

    constructor(initialFlyweights: string[][]) {
      for (const state of initialFlyweights) {
        this.flyweights[this.getKey(state)] = new Flyweight(state);
      }
    }

    // hash of flyeweight string
    private getKey(state: string[]): string {
      return state.join('_');
    }

    // create flyweight or return existed
    public getFlyweight(sharedState: string[]) {
      const key = this.getKey(sharedState);

      if (!(key in this.flyweights)) {
        console.log('create new flyweight');
        this.flyweights[key] = new Flyweight(sharedState);
      } else {
        console.log('cached flyweight');
      }

      return this.flyweights[key];
    }

    public listFlyweights(): void {
      const count = Object.keys(this.flyweights).length;
      console.log(`there are ${count} flyweights`);

      for (const key in this.flyweights) {
        console.log(key);
      }
    }
  }

  const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white']
  ]);
  factory.listFlyweights();

  const addCarToPoliceDB = (
    ff: FlyweightFactory,
    plates: string,
    owner: string,
    brand: string,
    model: string,
    color: string
  ) => {
    // new or cached flyweight
    const flyweight = ff.getFlyweight([brand, model, color]);
    console.log('add car to db');

    flyweight.operation([plates, owner]);
  };

  addCarToPoliceDB(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');

  addCarToPoliceDB(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');

  // repeat - return cached
  addCarToPoliceDB(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');

  factory.listFlyweights();
}
