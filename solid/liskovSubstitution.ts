interface Shape {
  areaOf(): number;
}

interface WidthfulShape {
  setWidth(size: number): void;
}

interface HeightfulShape {
  setHeight(size: number): void;
}

type ShapeRect = Shape & WidthfulShape & HeightfulShape;
type ShapeSide = 'width' | 'height';

class Rect {
  width: number = 0;
  height: number = 0;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setSide(side: ShapeSide, size: number) {
    this[side] = size;
  }

  setWidth(width: number) {
    this.setSide('width', width);
  }

  setHeight(height: number) {
    this.setSide('height', height);
  }

  areaOf(): number {
    return this.width * this.height;
  }
}

type ShapeSqr = Shape & WidthfulShape;

class Sqr implements ShapeSqr {
  edge: number;

  constructor(size: number) {
    this.edge = size;
  }

  protected setSide(size: number): void {
    this.edge = size;
  }

  setWidth(size: number) {
    this.setSide(size);
  }

  areaOf(): number {
    return this.edge ** 2;
  }
}
