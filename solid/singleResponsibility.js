"use strict";
var ReportTypes;
(function (ReportTypes) {
    ReportTypes[ReportTypes["Html"] = 0] = "Html";
    ReportTypes[ReportTypes["Txt"] = 1] = "Txt";
})(ReportTypes || (ReportTypes = {}));
var ReportExporter = /** @class */ (function () {
    function ReportExporter(name, data) {
        this.name = name;
        this.data = data;
    }
    ReportExporter.prototype.export = function (reportType) {
        var formatter = new FormatSelector().selectFormat(reportType, this.data);
        return formatter.format();
    };
    return ReportExporter;
}());
var FormatSelector = /** @class */ (function () {
    function FormatSelector() {
        var _a, _b;
        this.formatters = (_a = {},
            _a[ReportTypes.Html] = HtmlFormatter,
            _a[ReportTypes.Txt] = TxtFormatter,
            _a);
        this.formatters = (_b = {},
            _b[ReportTypes.Html] = HtmlFormatter,
            _b[ReportTypes.Txt] = TxtFormatter,
            _b);
    }
    FormatSelector.prototype.selectFormat = function (reportType, data) {
        var FormatterFactory = this.formatters[reportType];
        return new FormatterFactory(data);
    };
    return FormatSelector;
}());
var HtmlFormatter = /** @class */ (function () {
    function HtmlFormatter(data) {
        this.data = data;
    }
    HtmlFormatter.prototype.format = function () {
        return 'html string';
    };
    return HtmlFormatter;
}());
var TxtFormatter = /** @class */ (function () {
    function TxtFormatter(data) {
        this.data = data;
    }
    TxtFormatter.prototype.format = function () {
        return 'txt string';
    };
    return TxtFormatter;
}());
var exporter = new ReportExporter('Exporter', {
    content: 'string',
    date: new Date(),
    size: 53
});
console.log(exporter.export(0)); // html string
