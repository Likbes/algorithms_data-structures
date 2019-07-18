"use strict";
// target class declare interface that
// client code can work with
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
var Target = /** @class */ (function () {
    function Target() {
    }
    Target.prototype.request = function () {
        return 'default target\'s behavior';
    };
    return Target;
}());
// adaptee class which contains specific usefull behavior
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specificRequest = function () {
        return '.eetpadA eht fo roivaheb laicepS';
    };
    return Adaptee;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    Adapter.prototype.request = function () {
        var result = this.adaptee
            .specificRequest()
            .split('')
            .reverse()
            .join('');
        return "adapter: translate adaptee: " + result;
    };
    return Adapter;
}(Target));
(function client() {
    var request = function (target) { return console.log(target.request()); };
    var target = new Target();
    request(target);
    var adaptee = new Adaptee();
    // request(Adaptee) - cannot work with adaptee
    var adapter = new Adapter(adaptee);
    request(adapter);
})();
