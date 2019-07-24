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
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator(c1, c2) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }
    ConcreteMediator.prototype.notify = function (sender, event) {
        if (event === 'A') {
            console.log('mediator reacts on A event and trigger operations');
            this.component2.doSomethingC();
        }
        if (event === 'D') {
            console.log('mediator reacts on D event and trigger operations');
            this.component1.doSomethingB();
            this.component2.doSomethingC();
        }
    };
    return ConcreteMediator;
}());
// basic functionality to storage instance of mediator
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
    }
    BaseComponent.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return BaseComponent;
}());
// concrete components implements different functionalities
var Component1 = /** @class */ (function (_super) {
    __extends(Component1, _super);
    function Component1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component1.prototype.doSomethingA = function () {
        console.log('component 1 do something a');
        this.mediator.notify(this, 'A');
    };
    Component1.prototype.doSomethingB = function () {
        console.log('component 1 do something b');
        this.mediator.notify(this, 'B');
    };
    return Component1;
}(BaseComponent));
var Component2 = /** @class */ (function (_super) {
    __extends(Component2, _super);
    function Component2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component2.prototype.doSomethingC = function () {
        console.log('component 2 do something c');
        this.mediator.notify(this, 'C');
    };
    Component2.prototype.doSomethingD = function () {
        console.log('component 2 do something d');
        this.mediator.notify(this, 'D');
    };
    return Component2;
}(BaseComponent));
var c1 = new Component1();
var c2 = new Component2();
var mediator = new ConcreteMediator(c1, c2);
console.log('client triggers operation A');
c1.doSomethingA();
console.log('\n');
console.log('client triggers operation D');
c2.doSomethingD();
