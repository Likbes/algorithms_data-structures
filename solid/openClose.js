"use strict";
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        var _this = this;
        this.areaOf = function () {
            return _this.width * _this.height;
        };
        this.width = width;
        this.height = height;
    }
    return Rectangle;
}());
var CircleFigure = /** @class */ (function () {
    function CircleFigure(radius) {
        var _this = this;
        this.areaOf = function () {
            return Math.PI * Math.pow(_this.radius, 2);
        };
        this.radius = radius;
    }
    return CircleFigure;
}());
var AreaCalculator = /** @class */ (function () {
    function AreaCalculator(shapes) {
        var _this = this;
        this.totalAreaOf = function () {
            return _this.shapes.reduce(function (tally, shape) {
                // 2. just use areaOf without typeof check
                return (tally += shape.areaOf());
            }, 0);
        };
        this.shapes = shapes;
    }
    return AreaCalculator;
}());
