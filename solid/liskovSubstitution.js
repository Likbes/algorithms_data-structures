"use strict";
var Rect = /** @class */ (function () {
    function Rect(width, height) {
        this.width = 0;
        this.height = 0;
        this.width = width;
        this.height = height;
    }
    Rect.prototype.setSide = function (side, size) {
        this[side] = size;
    };
    Rect.prototype.setWidth = function (width) {
        this.setSide('width', width);
    };
    Rect.prototype.setHeight = function (height) {
        this.setSide('height', height);
    };
    Rect.prototype.areaOf = function () {
        return this.width * this.height;
    };
    return Rect;
}());
var Sqr = /** @class */ (function () {
    function Sqr(size) {
        this.edge = size;
    }
    Sqr.prototype.setSide = function (size) {
        this.edge = size;
    };
    Sqr.prototype.setWidth = function (size) {
        this.setSide(size);
    };
    Sqr.prototype.areaOf = function () {
        return Math.pow(this.edge, 2);
    };
    return Sqr;
}());
