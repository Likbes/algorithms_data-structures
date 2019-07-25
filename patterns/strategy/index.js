"use strict";
var Strategy;
(function (Strategy) {
    var Context = /** @class */ (function () {
        function Context(strategy) {
            this.strategy = strategy;
        }
        Context.prototype.setStrategy = function (strategy) {
            this.strategy = strategy;
        };
        Context.prototype.doBusinessLogic = function () {
            console.log('context: delegate work to strategy');
            var result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
            console.log(result.join(','));
        };
        return Context;
    }());
    var StrategyA = /** @class */ (function () {
        function StrategyA() {
        }
        StrategyA.prototype.doAlgorithm = function (data) {
            return data.sort();
        };
        return StrategyA;
    }());
    var StrategyB = /** @class */ (function () {
        function StrategyB() {
        }
        StrategyB.prototype.doAlgorithm = function (data) {
            return data.reverse();
        };
        return StrategyB;
    }());
    var context = new Context(new StrategyA());
    console.log('client set normal sorting');
    context.doBusinessLogic();
    console.log('client set reverse sorting');
    context.setStrategy(new StrategyB());
    context.doBusinessLogic();
})(Strategy || (Strategy = {}));
