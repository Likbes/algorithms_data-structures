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
var TemplateMethod;
(function (TemplateMethod) {
    // abstract class with skeleton algorithm method
    var AbstractClass = /** @class */ (function () {
        function AbstractClass() {
        }
        AbstractClass.prototype.templateMethod = function () {
            this.baseOperation1();
            this.requiredOperation1();
            this.baseOperation2();
            this.hook1();
            this.requiredOperation2();
            this.baseOperation3();
            this.hook2();
        };
        AbstractClass.prototype.baseOperation1 = function () {
            console.log('AbstractClass says: I am doing the bulk of the work');
        };
        AbstractClass.prototype.baseOperation2 = function () {
            console.log('AbstractClass says: But I let subclasses override some operations');
        };
        AbstractClass.prototype.baseOperation3 = function () {
            console.log('AbstractClass says: But I am doing the bulk of the work anyway');
        };
        // optional for subclasses to overwrite hooks
        AbstractClass.prototype.hook1 = function () { };
        AbstractClass.prototype.hook2 = function () { };
        return AbstractClass;
    }());
    var ClassA = /** @class */ (function (_super) {
        __extends(ClassA, _super);
        function ClassA() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ClassA.prototype.requiredOperation1 = function () {
            console.log('classA: implemented operation 1');
        };
        ClassA.prototype.requiredOperation2 = function () {
            console.log('classA: implemented operation 2');
        };
        return ClassA;
    }(AbstractClass));
    var ClassB = /** @class */ (function (_super) {
        __extends(ClassB, _super);
        function ClassB() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ClassB.prototype.requiredOperation1 = function () {
            console.log('classB: implemented operation 1');
        };
        ClassB.prototype.requiredOperation2 = function () {
            console.log('classB: implemented operation 2');
        };
        ClassB.prototype.hook1 = function () {
            console.log('classB: implemented hook 1');
        };
        return ClassB;
    }(AbstractClass));
    var doTempMeth = function (c) { return c.templateMethod(); };
    console.log('same client code can work with different subclasses:');
    doTempMeth(new ClassA());
    console.log('');
    console.log('same client code can work with different subclasses:');
    doTempMeth(new ClassB());
})(TemplateMethod || (TemplateMethod = {}));
