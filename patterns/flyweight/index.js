"use strict";
var Flyweight;
(function (Flyweight_1) {
    // common part of state
    var Flyweight = /** @class */ (function () {
        function Flyweight(sharedState) {
            this.sharedState = sharedState;
        }
        Flyweight.prototype.operation = function (uniqueState) {
            var shared = JSON.stringify(this.sharedState);
            var unique = JSON.stringify(uniqueState);
            console.log("flyweight: shared: " + shared + " and unique " + unique);
        };
        return Flyweight;
    }());
    // factory creates flyweight-objects
    var FlyweightFactory = /** @class */ (function () {
        function FlyweightFactory(initialFlyweights) {
            this.flyweights = {};
            for (var _i = 0, initialFlyweights_1 = initialFlyweights; _i < initialFlyweights_1.length; _i++) {
                var state = initialFlyweights_1[_i];
                this.flyweights[this.getKey(state)] = new Flyweight(state);
            }
        }
        // hash of flyeweight string
        FlyweightFactory.prototype.getKey = function (state) {
            return state.join('_');
        };
        // create flyweight or return existed
        FlyweightFactory.prototype.getFlyweight = function (sharedState) {
            var key = this.getKey(sharedState);
            if (!(key in this.flyweights)) {
                console.log('create new flyweight');
                this.flyweights[key] = new Flyweight(sharedState);
            }
            else {
                console.log('cached flyweight');
            }
            return this.flyweights[key];
        };
        FlyweightFactory.prototype.listFlyweights = function () {
            var count = Object.keys(this.flyweights).length;
            console.log("there are " + count + " flyweights");
            for (var key in this.flyweights) {
                console.log(key);
            }
        };
        return FlyweightFactory;
    }());
    var factory = new FlyweightFactory([
        ['Chevrolet', 'Camaro2018', 'pink'],
        ['Mercedes Benz', 'C300', 'black'],
        ['Mercedes Benz', 'C500', 'red'],
        ['BMW', 'M5', 'red'],
        ['BMW', 'X6', 'white']
    ]);
    factory.listFlyweights();
    var addCarToPoliceDB = function (ff, plates, owner, brand, model, color) {
        // new or cached flyweight
        var flyweight = ff.getFlyweight([brand, model, color]);
        console.log('add car to db');
        flyweight.operation([plates, owner]);
    };
    addCarToPoliceDB(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');
    addCarToPoliceDB(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');
    // repeat - return cached
    addCarToPoliceDB(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');
    factory.listFlyweights();
})(Flyweight || (Flyweight = {}));
