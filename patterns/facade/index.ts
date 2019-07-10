class Square {
  length: number;

  constructor(length: number) {
    this.length = length;
  }

  areaOf(): number {
    return this.length ** 2;
  }
}

class Circle {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  areaOf(): number {
    return Math.PI * this.radius ** 2;
  }
}

// facade - create class to simplify interaction with difficult api ( another class/es )
class ShapeFacade {
  square: Square;
  circle: Circle;

  constructor() {
    this.square = new Square(42);
    this.circle = new Circle(42);
  }

  areaOf(figure: string): number {
    switch (figure) {
      case 'square':
        return this.square.areaOf();
      case 'circle':
        return this.circle.areaOf();
      default:
        return 0;
    }
  }
}
