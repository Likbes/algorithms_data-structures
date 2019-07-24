namespace CommandPattern {
  interface Command {
    execute(): void;
  }

  // concrete commands
  class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
      this.payload = payload;
    }

    public execute(): void {
      console.log(`simple command: print ${this.payload}`);
    }
  }

  class ComplexCommand implements Command {
    private receiver: Receiver;
    private a: string;
    private b: string;

    constructor(receiver: Receiver, a: string, b: string) {
      this.receiver = receiver;
      this.a = a;
      this.b = b;
    }

    public execute(): void {
      console.log(`complex command:  stuff by receiver object`);
      this.receiver.doSomething(this.a);
      this.receiver.doSomethingElse(this.b);
    }
  }

  // important business logic
  class Receiver {
    public doSomething(a: string): void {
      console.log(`Receiver: working with ${a}`);
    }

    public doSomethingElse(b: string): void {
      console.log(`Receiver: also working with ${b}`);
    }
  }

  // send request to command
  class Invoker {
    private onStart?: Command;
    private onFinish?: Command;

    public setOnStart(command: Command): void {
      this.onStart = command;
    }

    public setOnFinish(command: Command): void {
      this.onFinish = command;
    }

    public doSomethingImportant(): void {
      console.log('Invoker: do smth before i begin?');
      if (this.isCommand(this.onStart)) {
        this.onStart.execute();
      }

      console.log('Invoker: doing smth important');
      console.log('Invoker: do smth after finish?');
      if (this.isCommand(this.onFinish)) {
        this.onFinish.execute();
      }
    }

    private isCommand(object: any): object is Command {
      return object.execute !== undefined;
    }
  }

  const invoker = new Invoker();
  invoker.setOnStart(new SimpleCommand('Hi!'));

  const receiver = new Receiver();
  invoker.setOnFinish(
    new ComplexCommand(receiver, 'Send email', 'Save report')
  );

  invoker.doSomethingImportant();
}
