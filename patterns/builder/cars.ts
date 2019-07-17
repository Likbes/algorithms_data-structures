interface Builder {
  reset(): void;
  setSeats(n: number): void;
  setEngine(e: Engine): void;
  setTripComputer(): void;
  setGPS(): void;
}

interface ICar {
  seats: number;
  engine: string;
  tripComputer: boolean;
  gps: boolean;
}

interface IManualCar {
  seats: string;
  engine: string;
  tripComputer: string;
  gps: string;
}

// engine

interface Engine {
  name: string;
}

class SportEngine {
  name: string;

  constructor() {
    this.name = 'sport engine';
  }
}

// car builder and class

class CarBuilder implements Builder {
  private car: ICar;

  constructor() {
    this.car = new Car();
  }

  reset() {
    this.car = new Car();
  }

  setSeats(num: number) {
    this.car.seats = num;
  }

  setEngine(engine: Engine) {
    this.car.engine = engine.name;
  }

  setTripComputer() {
    this.car.tripComputer = true;
  }

  setGPS() {
    this.car.gps = true;
  }

  getResult() {
    return this.car;
  }
}

class Car implements ICar {
  seats: number;
  engine: string;
  tripComputer: boolean;
  gps: boolean;

  constructor() {
    // default
    this.seats = 4;
    this.engine = 'default engine';
    this.tripComputer = false;
    this.gps = false;
  }
}

// manual builder and class

class CarManualBuilder implements Builder {
  private manual: IManualCar;

  constructor() {
    this.manual = new Manual();
  }

  reset() {
    this.manual = new Manual();
  }

  setSeats(num: number) {
    this.manual.seats = `describe that car must have ${num} seats`;
  }

  setEngine(engine: Engine) {
    this.manual.engine = `describe ${engine.name} engine`;
  }

  setTripComputer() {
    this.manual.tripComputer = 'describe trip computer';
  }

  setGPS() {
    this.manual.gps = 'describe gps';
  }

  getResult() {
    return this.manual;
  }
}

class Manual implements IManualCar {
  seats: string;
  engine: string;
  tripComputer: string;
  gps: string;

  constructor() {
    // default manual
    this.seats = 'default number of seats';
    this.engine = 'default engine';
    this.tripComputer = 'default trip computer description';
    this.gps = 'default gps description';
  }
}

// director leads the builder

class Director {
  constructSportCar(builder: Builder) {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine(new SportEngine());
    builder.setTripComputer();
    builder.setGPS();
  }
}

class Application {
  makeCar() {
    let car: Car;
    let manual: Manual;
    const director = new Director();
    const carBuilder = new CarBuilder();
    const manualBuilder = new CarManualBuilder();

    director.constructSportCar(carBuilder);
    car = carBuilder.getResult();
    console.log(car);

    director.constructSportCar(manualBuilder);
    manual = manualBuilder.getResult();
    console.log(manual);
  }
}

const app = new Application();
app.makeCar();
