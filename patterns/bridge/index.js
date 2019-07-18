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
var Abstraction = /** @class */ (function () {
    function Abstraction(implementation) {
        this.implementation = implementation;
    }
    Abstraction.prototype.operation = function () {
        var result = this.implementation.operationImplementation();
        return "Abstraction: base operation " + result;
    };
    return Abstraction;
}());
// we can extend abstraction without changes in implementation
var ExtendedAbstraction = /** @class */ (function (_super) {
    __extends(ExtendedAbstraction, _super);
    function ExtendedAbstraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendedAbstraction.prototype.operation = function () {
        var result = this.implementation.operationImplementation();
        return "Extended abstraction: extended operation " + result;
    };
    return ExtendedAbstraction;
}(Abstraction));
var SofaImplementation = /** @class */ (function () {
    function SofaImplementation() {
    }
    SofaImplementation.prototype.operationImplementation = function () {
        return 'u can lie on sofa';
    };
    return SofaImplementation;
}());
var ChairImplementation = /** @class */ (function () {
    function ChairImplementation() {
    }
    ChairImplementation.prototype.operationImplementation = function () {
        return 'u can sit on chair';
    };
    return ChairImplementation;
}());
(function client() {
    var operation = function (a) { return console.log(a.operation()); };
    var imp = new SofaImplementation();
    var abstraction = new Abstraction(imp);
    operation(abstraction);
    console.log('\n');
    imp = new ChairImplementation();
    abstraction = new ExtendedAbstraction(imp);
    operation(abstraction);
})();
