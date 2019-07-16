"use strict";
var AbstractFactoryProducts;
(function (AbstractFactoryProducts) {
    /*
     * Specific Creators override the factory method in order
     * to change the type of the resulting product.
     */
    var FirstConcreteFactory = /** @class */ (function () {
        function FirstConcreteFactory() {
        }
        FirstConcreteFactory.prototype.createSofa = function () {
            return new FirstConcreteSofa();
        };
        FirstConcreteFactory.prototype.createChair = function () {
            return new FirstConcreteChair();
        };
        return FirstConcreteFactory;
    }());
    var SecondConcreteFactory = /** @class */ (function () {
        function SecondConcreteFactory() {
        }
        SecondConcreteFactory.prototype.createSofa = function () {
            return new SecondConcreteSofa();
        };
        SecondConcreteFactory.prototype.createChair = function () {
            return new SecondConcreteChair();
        };
        return SecondConcreteFactory;
    }());
    var FirstConcreteChair = /** @class */ (function () {
        function FirstConcreteChair() {
        }
        FirstConcreteChair.prototype.sit = function () {
            return 'The result of the first chair variation method.';
        };
        return FirstConcreteChair;
    }());
    var SecondConcreteChair = /** @class */ (function () {
        function SecondConcreteChair() {
        }
        SecondConcreteChair.prototype.sit = function () {
            return 'The result of the second chair variation method.';
        };
        return SecondConcreteChair;
    }());
    var FirstConcreteSofa = /** @class */ (function () {
        function FirstConcreteSofa() {
        }
        FirstConcreteSofa.prototype.lie = function () {
            return 'The result of the first sofa variation method.';
        };
        FirstConcreteSofa.prototype.sit = function (collaborator) {
            var result = collaborator.sit();
            return "The result of the first sofa collaborating with the (" + result + ")";
        };
        return FirstConcreteSofa;
    }());
    var SecondConcreteSofa = /** @class */ (function () {
        function SecondConcreteSofa() {
        }
        SecondConcreteSofa.prototype.lie = function () {
            return 'The result of the second sofa variation method.';
        };
        SecondConcreteSofa.prototype.sit = function (collaborator) {
            var result = collaborator.sit();
            return "The result of the second sofa collaborating with the (" + result + ")";
        };
        return SecondConcreteSofa;
    }());
    function client(factory) {
        var chair = factory.createChair();
        var sofa = factory.createSofa();
        console.log(sofa.lie());
        console.log(sofa.sit(chair));
    }
    console.log('Testing with first factory');
    client(new FirstConcreteFactory());
    console.log('////////');
    console.log('Testing with second factory');
    client(new SecondConcreteFactory());
})(AbstractFactoryProducts || (AbstractFactoryProducts = {}));
