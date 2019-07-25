namespace State {
  class Context {
    private state!: State;

    constructor(state: State) {
      this.transitionTo(state);
    }

    // change state object in runtime
    public transitionTo(state: State): void {
      console.log(`context: transition to ${state.constructor.name}`);
      this.state = state;
      this.state.setContext(this);
    }

    // delegate to state
    public requestA(): void {
      this.state.handleA();
    }

    public requestB(): void {
      this.state.handleB();
    }
  }

  abstract class State {
    protected context!: Context;

    public setContext(context: Context) {
      this.context = context;
    }

    public abstract handleA(): void;
    public abstract handleB(): void;
  }

  class FirstState extends State {
    public handleA(): void {
      console.log('first state handles requestA');
      console.log('first state wants to change state of context');
      this.context.transitionTo(new SecondState());
    }

    public handleB(): void {
      console.log('first state handles requestB');
    }
  }

  class SecondState extends State {
    public handleA(): void {
      console.log('second state handles requestA');
    }

    public handleB(): void {
      console.log('second state handles requestA');
      console.log('second state wants to change state of context');
      this.context.transitionTo(new FirstState());
    }
  }

  const context = new Context(new FirstState());
  context.requestA();
  context.requestB();
}
