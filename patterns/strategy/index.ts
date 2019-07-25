namespace Strategy {
  class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
      this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy): void {
      this.strategy = strategy;
    }

    public doBusinessLogic(): void {
      console.log('context: delegate work to strategy');
      const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
      console.log(result.join(','));
    }
  }

  interface Strategy {
    doAlgorithm(data: string[]): string[];
  }

  class StrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
      return data.sort();
    }
  }

  class StrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
      return data.reverse();
    }
  }

  const context = new Context(new StrategyA());
  console.log('client set normal sorting');
  context.doBusinessLogic();

  console.log('client set reverse sorting');
  context.setStrategy(new StrategyB());
  context.doBusinessLogic();
}
