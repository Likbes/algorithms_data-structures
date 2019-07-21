namespace CoR {
  interface Handler {
    setNext(handler: Handler): Handler;

    handle(request: string): string | null;
  }

  abstract class AbstractHandler implements Handler {
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
      this.nextHandler = handler;

      return handler;
    }

    public handle(request: string): string | null {
      return this.nextHandler ? this.nextHandler.handle(request) : null;
    }
  }

  // all concrete classes either handle request
  // or give it to next
  class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
      if (request === 'Banana') {
        return `Monkey: I'll eat the ${request}.`;
      }
      return super.handle(request);
    }
  }

  class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
      if (request === 'Nut') {
        return `Squirrel: I'll eat the ${request}.`;
      }
      return super.handle(request);
    }
  }

  class DogHandler extends AbstractHandler {
    public handle(request: string): string {
      if (request === 'MeatBall') {
        return `Dog: I'll eat the ${request}.`;
      }
      return super.handle(request);
    }
  }

  const client = (handler: Handler) => {
    const foods = ['Nut', 'Banana', 'Cup of coffee'];

    for (const food of foods) {
      console.log(`who wants ${food}?`);

      const result = handler.handle(food);
      result ? console.log(result) : console.log(`${food} was left untouched`);
    }
  };

  // create chain
  const monkey = new MonkeyHandler();
  const squirrel = new SquirrelHandler();
  const dog = new DogHandler();

  monkey.setNext(squirrel).setNext(dog);

  console.log('chain monket -> squirrel -> dog');
  client(monkey);
  console.log('\n');
  console.log('subchain squirrel -> dog');
  client(squirrel);
}
