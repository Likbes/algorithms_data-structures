"use strict";
// breaks ISP
// interface Spend {
//   amount: number;
//   date: Date;
//   type: 'helpful' | 'harmful' | null;
// }
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
var RecordItem = /** @class */ (function () {
    function RecordItem(amount) {
        this.amount = amount;
        this.date = new Date();
    }
    return RecordItem;
}());
var SpendItem = /** @class */ (function (_super) {
    __extends(SpendItem, _super);
    function SpendItem(amount, type) {
        if (type === void 0) { type = null; }
        var _this = _super.call(this, amount) || this;
        _this.is = 'spend';
        _this.type = type;
        return _this;
    }
    return SpendItem;
}(RecordItem));
var IncomeItem = /** @class */ (function (_super) {
    __extends(IncomeItem, _super);
    function IncomeItem(amount) {
        var _this = _super.call(this, amount) || this;
        _this.is = 'income';
        return _this;
    }
    return IncomeItem;
}(RecordItem));
