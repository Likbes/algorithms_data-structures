type ReportData = {
  content: string;
  date: Date;
  size: number;
};

enum ReportTypes {
  Html,
  Txt
}

interface Formatter {
  data: ReportData;
  format(): string;
}

class ReportExporter {
  name: string;
  data: ReportData;

  constructor(name: string, data: ReportData) {
    this.name = name;
    this.data = data;
  }

  export(reportType: ReportTypes): string {
    const formatter: Formatter = new FormatSelector().selectFormat(
      reportType,
      this.data
    );

    return formatter.format();
  }
}

class FormatSelector {
  formatters = {
    [ReportTypes.Html]: HtmlFormatter,
    [ReportTypes.Txt]: TxtFormatter
  };

  constructor() {
    this.formatters = {
      [ReportTypes.Html]: HtmlFormatter,
      [ReportTypes.Txt]: TxtFormatter
    };
  }

  selectFormat(reportType: ReportTypes, data: ReportData): Formatter {
    const FormatterFactory = this.formatters[reportType];
    return new FormatterFactory(data);
  }
}

class HtmlFormatter implements Formatter {
  data: ReportData;

  constructor(data: ReportData) {
    this.data = data;
  }

  format(): string {
    return 'html string';
  }
}

class TxtFormatter implements Formatter {
  data: ReportData;

  constructor(data: ReportData) {
    this.data = data;
  }

  format(): string {
    return 'txt string';
  }
}

const exporter = new ReportExporter('Exporter', {
  content: 'string',
  date: new Date(),
  size: 53
});

console.log(exporter.export(0)); // html string
