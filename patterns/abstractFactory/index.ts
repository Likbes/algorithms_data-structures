// abstact factory of singleResponsibility example
interface FormatterFactory {
  createFormatter(data: ReportData): Formatter;
}

class HtmlFormatterFactory implements FormatterFactory {
  data: ReportData;

  constructor(data: ReportData) {
    this.data = data;
  }

  createFormatter() {
    return new HtmlFormatter(this.data);
  }
}

class TxtFormatterFactory implements FormatterFactory {
  data: ReportData;

  constructor(data: ReportData) {
    this.data = data;
  }

  createFormatter() {
    return new TxtFormatter(this.data);
  }
}

class AppConfigurator {
  reportType: ReportTypes;

  constructor(reportType: ReportTypes) {
    this.reportType = reportType;
  }

  configure(reportData: ReportData): FormatterFactory {
    if (this.reportType === ReportTypes.Html) {
      return new HtmlFormatterFactory(reportData);
    }

    return new TxtFormatterFactory(reportData);
  }
}
