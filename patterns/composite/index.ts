abstract class Component {
  protected parent?: Component;

  public setParent(parent: Component | undefined) {
    this.parent = parent;
  }

  public getParent() {
    return this.parent;
  }

  public add(component: Component): void {}

  public remove(component: Component): void {}

  public isComposite(): boolean {
    return false;
  }

  public abstract operation(): string;
}

class Leaf extends Component {
  operation() {
    return 'Leaf';
  }
}

class Composite extends Component {
  protected children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
    const index = this.children.indexOf(component);
    this.children.splice(index, 1);

    component.setParent(undefined);
  }

  public isComposite(): boolean {
    return true;
  }

  operation(): string {
    const result = [];
    for (const child of this.children) {
      result.push(child.operation());
    }

    return `branch with (${result.join(' + ')})`;
  }
}

(() => {
  const operation = (component: Component) =>
    console.log(component.operation());

  const composite = (component1: Component, component2: Component) => {
    if (component1.isComposite()) {
      component1.add(component2);
    }

    console.log(`result: ${component1.operation()}`);
  };

  const simple = new Leaf();
  console.log('work with leaf');
  operation(simple);
  console.log('');

  const tree = new Composite();
  const branch1 = new Composite();
  branch1.add(new Leaf());
  branch1.add(new Leaf());
  const branch2 = new Composite();
  branch2.add(new Leaf());
  tree.add(branch1);
  tree.add(branch2);
  console.log('and with trees');
  operation(tree);
  console.log('');

  // work even with difficult components

  composite(tree, branch1);
})();
