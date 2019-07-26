namespace Visitor {
  // interface or abstract class of shape
  abstract class Shape {
    public move(x: number, y: number): void {
      console.log(`move shape in ${x} for x and ${y} for y`);
    }

    public draw(): void {
      console.log('draw a shape');
    }

    public abstract accept(v: Visitor): void;
  }

  class Dot extends Shape {
    public accept(v: Visitor): void {
      console.log('dot shape accept visit method');
      v.visitDot(this);
    }
  }

  class Circle extends Shape {
    public accept(v: Visitor): void {
      console.log('circle shape accept visit method');
      v.visitCircle(this);
    }
  }

  class Rectangle extends Shape {
    public accept(v: Visitor): void {
      console.log('rectangle shape accept visit method');
      v.visitRect(this);
    }
  }

  class CompoundShape extends Shape {
    public accept(v: Visitor): void {
      console.log('compoundShape shape accept visit method');
      v.visitCompound(this);
    }
  }

  // visitor interface have to include visit methods
  interface Visitor {
    visitDot(d: Dot): void;
    visitCircle(c: Circle): void;
    visitRect(r: Rectangle): void;
    visitCompound(cs: CompoundShape): void;
  }

  class XMLExportVisitor implements Visitor {
    visitDot(d: Dot): void {
      console.log('dot: export id and coordinates');
    }

    visitCircle(c: Circle): void {
      console.log('circle: export id and center coodrs with radius');
    }

    visitRect(r: Rectangle): void {
      console.log('rect: export id coords of top-left abgle and sizes');
    }

    visitCompound(cs: CompoundShape): void {
      console.log('export id and list of subshapes ids');
    }
  }

  const shapes = [
    new Dot(),
    new Circle(),
    new Rectangle(),
    new CompoundShape()
  ];
  const expVisitor = new XMLExportVisitor();

  shapes.forEach(shape => {
    shape.accept(expVisitor);
  });
}
