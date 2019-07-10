"use strict";
var Square = /** @class */ (function () {
    function Square(length) {
        this.length = length;
    }
    Square.prototype.areaOf = function () {
        return Math.pow(this.length, 2);
    };
    return Square;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.areaOf = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
// facade - create class to simplify interaction with difficult api ( another class/es )
var ShapeFacade = /** @class */ (function () {
    function ShapeFacade() {
        this.square = new Square(42);
        this.circle = new Circle(42);
    }
    ShapeFacade.prototype.areaOf = function (figure) {
        switch (figure) {
            case 'square':
                return this.square.areaOf();
            case 'circle':
                return this.circle.areaOf();
            default:
                return 0;
        }
    };
    return ShapeFacade;
}());
