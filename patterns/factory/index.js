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
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.someOperation = function () {
        // choose factory method to get object-product
        var product = this.factoryMethod();
        return "Creator: worked with " + product.operation();
    };
    return Creator;
}());
/*
 * Specific Creators override the factory method in order
 * to change the type of the resulting product.
 */
var FirstConcreteCreator = /** @class */ (function (_super) {
    __extends(FirstConcreteCreator, _super);
    function FirstConcreteCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirstConcreteCreator.prototype.factoryMethod = function () {
        return new FirstConcreteProduct();
    };
    return FirstConcreteCreator;
}(Creator));
var SecondConcreteCreator = /** @class */ (function (_super) {
    __extends(SecondConcreteCreator, _super);
    function SecondConcreteCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecondConcreteCreator.prototype.factoryMethod = function () {
        return new SecondConcreteProduct();
    };
    return SecondConcreteCreator;
}(Creator));
/*
 * Specific Products provide various Product interface implementations.
 */
var FirstConcreteProduct = /** @class */ (function () {
    function FirstConcreteProduct() {
    }
    FirstConcreteProduct.prototype.operation = function () {
        return "FirstConcreteProduct";
    };
    return FirstConcreteProduct;
}());
var SecondConcreteProduct = /** @class */ (function () {
    function SecondConcreteProduct() {
    }
    SecondConcreteProduct.prototype.operation = function () {
        return "SecondConcreteProduct";
    };
    return SecondConcreteProduct;
}());
function code(creator) {
    console.log('i dont know creators class');
    console.log(creator.someOperation());
}
code(new FirstConcreteCreator());
code(new SecondConcreteCreator());
