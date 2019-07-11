interface Greeting {
  username: string;
  greet(): string;
}

// basic functionality

class BaseGreeting implements Greeting {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  greet = (): string => {
    return `Hello, ${this.username}!`;
  };
}

// wrappee — object, which functionality we'll extend
interface GreetingDecorator {
  wrappee: Greeting;
  greet(): string;
}

class GreetingWithUppercase implements GreetingDecorator {
  wrappee: Greeting;

  constructor(wrappee: Greeting) {
    this.wrappee = wrappee;
  }

  greet = (): string => {
    // 1. basic behavior
    const baseGreeting = this.wrappee.greet();
    // 2. extends
    return baseGreeting.toUpperCase();
  };
}
