"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Visitor;
(function (Visitor) {
    // interface or abstract class of shape
    var Shape = /** @class */ (function () {
        function Shape() {
        }
        Shape.prototype.move = function (x, y) {
            console.log("move shape in " + x + " for x and " + y + " for y");
        };
        Shape.prototype.draw = function () {
            console.log('draw a shape');
        };
        return Shape;
    }());
    var Dot = /** @class */ (function (_super) {
        __extends(Dot, _super);
        function Dot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dot.prototype.accept = function (v) {
            console.log('dot shape accept visit method');
            v.visitDot(this);
        };
        return Dot;
    }(Shape));
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Circle.prototype.accept = function (v) {
            console.log('circle shape accept visit method');
            v.visitCircle(this);
        };
        return Circle;
    }(Shape));
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Rectangle.prototype.accept = function (v) {
            console.log('rectangle shape accept visit method');
            v.visitRect(this);
        };
        return Rectangle;
    }(Shape));
    var CompoundShape = /** @class */ (function (_super) {
        __extends(CompoundShape, _super);
        function CompoundShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CompoundShape.prototype.accept = function (v) {
            console.log('compoundShape shape accept visit method');
            v.visitCompound(this);
        };
        return CompoundShape;
    }(Shape));
    var XMLExportVisitor = /** @class */ (function () {
        function XMLExportVisitor() {
        }
        XMLExportVisitor.prototype.visitDot = function (d) {
            console.log('dot: export id and coordinates');
        };
        XMLExportVisitor.prototype.visitCircle = function (c) {
            console.log('circle: export id and center coodrs with radius');
        };
        XMLExportVisitor.prototype.visitRect = function (r) {
            console.log('rect: export id coords of top-left abgle and sizes');
        };
        XMLExportVisitor.prototype.visitCompound = function (cs) {
            console.log('export id and list of subshapes ids');
        };
        return XMLExportVisitor;
    }());
    var shapes = [
        new Dot(),
        new Circle(),
        new Rectangle(),
        new CompoundShape()
    ];
    var expVisitor = new XMLExportVisitor();
    shapes.forEach(function (shape) {
        shape.accept(expVisitor);
    });
})(Visitor || (Visitor = {}));
