"use strict";
// basic functionality
var BaseGreeting = /** @class */ (function () {
    function BaseGreeting(username) {
        var _this = this;
        this.greet = function () {
            return "Hello, " + _this.username + "!";
        };
        this.username = username;
    }
    return BaseGreeting;
}());
var GreetingWithUppercase = /** @class */ (function () {
    function GreetingWithUppercase(wrappee) {
        var _this = this;
        this.greet = function () {
            // 1. basic behavior
            var baseGreeting = _this.wrappee.greet();
            // 2. extends
            return baseGreeting.toUpperCase();
        };
        this.wrappee = wrappee;
    }
    return GreetingWithUppercase;
}());
