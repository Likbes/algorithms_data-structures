"use strict";
var HtmlFormatterFactory = /** @class */ (function () {
    function HtmlFormatterFactory(data) {
        this.data = data;
    }
    HtmlFormatterFactory.prototype.createFormatter = function () {
        return new HtmlFormatter(this.data);
    };
    return HtmlFormatterFactory;
}());
var TxtFormatterFactory = /** @class */ (function () {
    function TxtFormatterFactory(data) {
        this.data = data;
    }
    TxtFormatterFactory.prototype.createFormatter = function () {
        return new TxtFormatter(this.data);
    };
    return TxtFormatterFactory;
}());
var AppConfigurator = /** @class */ (function () {
    function AppConfigurator(reportType) {
        this.reportType = reportType;
    }
    AppConfigurator.prototype.configure = function (reportData) {
        if (this.reportType === ReportTypes.Html) {
            return new HtmlFormatterFactory(reportData);
        }
        return new TxtFormatterFactory(reportData);
    };
    return AppConfigurator;
}());
