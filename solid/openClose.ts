interface AreaCalculatable {
  areaOf(): number;
}

class Rectangle implements AreaCalculatable {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  areaOf = (): number => {
    return this.width * this.height;
  };
}

class CircleFigure implements AreaCalculatable {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  areaOf = (): number => {
    return Math.PI * this.radius ** 2;
  };
}

class AreaCalculator {
  // 1. now this is abstact type,
  //    we can use all shapes that implements AreaCalculatable
  shapes: AreaCalculatable[];

  constructor(shapes: AreaCalculatable[]) {
    this.shapes = shapes;
  }

  totalAreaOf = (): number => {
    return this.shapes.reduce((tally: number, shape: AreaCalculatable) => {
      // 2. just use areaOf without typeof check
      return (tally += shape.areaOf());
    }, 0);
  };
}
