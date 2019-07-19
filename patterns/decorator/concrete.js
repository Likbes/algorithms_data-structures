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
var Decorator;
(function (Decorator_1) {
    var ConcreteComponent = /** @class */ (function () {
        function ConcreteComponent() {
        }
        ConcreteComponent.prototype.operation = function () {
            return 'ConcreteComponent';
        };
        return ConcreteComponent;
    }());
    // basic decorator class
    var Decorator = /** @class */ (function () {
        function Decorator(component) {
            this.component = component;
        }
        Decorator.prototype.operation = function () {
            return this.component.operation();
        };
        return Decorator;
    }());
    // usefull behavior
    var ConcreteDecoratorA = /** @class */ (function (_super) {
        __extends(ConcreteDecoratorA, _super);
        function ConcreteDecoratorA() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ConcreteDecoratorA.prototype.operation = function () {
            return "ConcreteDecoratorA(" + _super.prototype.operation.call(this) + ")";
        };
        return ConcreteDecoratorA;
    }(Decorator));
    // usefull behavior x2
    var ConcreteDecoratorB = /** @class */ (function (_super) {
        __extends(ConcreteDecoratorB, _super);
        function ConcreteDecoratorB() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ConcreteDecoratorB.prototype.operation = function () {
            return "ConcreteDecoratorB(" + _super.prototype.operation.call(this) + ")";
        };
        return ConcreteDecoratorB;
    }(Decorator));
    (function client() {
        var operation = function (c) { return console.log(c.operation()); };
        var component = new ConcreteComponent();
        var decoratorA = new ConcreteDecoratorA(component);
        var decoratorB = new ConcreteDecoratorB(decoratorA);
        console.log('decorated component');
        operation(decoratorB);
    })();
})(Decorator || (Decorator = {}));
