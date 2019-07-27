namespace WithoutDependencyInversion {
  class CarWindow {
    public open(): void {
      console.log('carWindow: open car window');
    }

    public close(): void {
      console.log('carWindow: close car window');
    }
  }

  // bad practice
  class WindowSwitch {
    private isOn = false;

    // depend on low-class
    constructor(private window: CarWindow) {}

    public onPress(): void {
      if (this.isOn) {
        this.window.close();
        this.isOn = false;
        return;
      }

      this.window.open();
      this.isOn = true;
    }
  }
}

namespace WithDependencyInversion {
  interface IWindow {
    open(): void;
    close(): void;
  }

  class CarWindow implements IWindow {
    public open(): void {
      console.log('carWindow: open car window');
    }

    public close(): void {
      console.log('carWindow: close car window');
    }
  }

  // bad practice
  class WindowSwitch {
    private isOn = false;

    // depend on low-class
    constructor(private window: IWindow) {}

    public onPress(): void {
      if (this.isOn) {
        this.window.close();
        this.isOn = false;
        return;
      }

      this.window.open();
      this.isOn = true;
    }
  }
}
