namespace Observer {
  // bunch of methods to control subscribers (observers)
  interface Subject {
    state: number;
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
  }

  class ConcreteSubject implements Subject {
    // state, that need to all observers
    public state: number;
    public observers: Observer[] = [];

    constructor(state: number) {
      this.state = state;
    }

    public attach(observer: Observer): void {
      console.log('subject: attached an observer');
      this.observers.push(observer);
    }

    public detach(observer: Observer): void {
      const observerIndex = this.observers.indexOf(observer);
      this.observers.splice(observerIndex, 1);
      console.log('subject: detached an observer.');
    }

    public notify(): void {
      console.log('subject: notifying observers...');
      for (const observer of this.observers) {
        observer.update(this);
      }
    }

    public doBusinessLogic(): void {
      console.log('subject: doing some business logic');
      this.state = Math.floor(Math.random() * 11);
      console.log(`subject: state has changed to ${this.state}`);
      this.notify();
    }
  }

  interface Observer {
    update(subject: Subject): void;
  }

  class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
      if (subject.state < 3) {
        console.log('observerA reacted to change');
      }
    }
  }

  class ConcreteObserverB implements Observer {
    public update(subject: Subject): void {
      if (subject.state === 0 || subject.state >= 2) {
        console.log('observerB reacted to change');
      }
    }
  }

  const subject = new ConcreteSubject(0);

  const observerA = new ConcreteObserverA();
  subject.attach(observerA);

  const observerB = new ConcreteObserverB();
  subject.attach(observerB);

  subject.doBusinessLogic();
  subject.doBusinessLogic();

  subject.detach(observerB);

  subject.doBusinessLogic();
}
