// abstact factory of singleResponsibility example

// добавляется новый интерфейс, описывающий фабрику фабрик
interface FormatterFactory {
  createFormatter(data: ReportData): Formatter;
}

// метод createFormatter возвращает абстрактный интерфейс,
// поэтому обе фабрики ниже взаимозаменяемы
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

// при конфигурации приложение выберет нужный тип фабрики и будет работать с ним;
// коду приложения при этом будет не важно, с какой фабрикой он будет работать,
// потому что он будет зависеть от интерфейсов, а не от конкретных классов
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
