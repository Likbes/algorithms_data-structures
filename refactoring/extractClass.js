"use strict";
// before
var PersonWithNumber = /** @class */ (function () {
    function PersonWithNumber(name, phone, officeCode) {
        var _this = this;
        this.phoneNumberOf = function () {
            return _this.phone + " \u0434\u043E\u0431. " + _this.officeCode;
        };
        this.name = name;
        this.phone = phone;
        this.officeCode = officeCode;
    }
    return PersonWithNumber;
}());
var PhoneNumber = /** @class */ (function () {
    function PhoneNumber(phone, officeCode) {
        var _this = this;
        this.valueOf = function () {
            return _this.phone + " \u0434\u043E\u0431. " + _this.officeCode;
        };
        this.phone = phone;
        this.officeCode = officeCode;
    }
    return PhoneNumber;
}());
var Person = /** @class */ (function () {
    function Person(name, phoneNumber) {
        var _this = this;
        this.phoneNumberOf = function () {
            return _this.phoneNumber.valueOf();
        };
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    return Person;
}());
