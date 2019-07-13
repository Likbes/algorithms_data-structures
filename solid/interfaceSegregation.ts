// breaks ISP
// interface Spend {
//   amount: number;
//   date: Date;
//   type: 'helpful' | 'harmful' | null;
// }

// type History = Spend[]

type RecordTypes = 'spend' | 'income';
type SpendTypes = 'helpful' | 'harmful' | null;

// common fields
interface BaseRecord {
  amount: number;
  date: Date;
  is: RecordTypes;
  // no type
}

// интерфейс траты расширяет интерфейс записи
interface Spend extends BaseRecord {
  type: SpendTypes;
}

class RecordItem implements BaseRecord {
  amount: number;
  date: Date;
  is!: RecordTypes;

  constructor(amount: number) {
    this.amount = amount;
    this.date = new Date();
  }
}

class SpendItem extends RecordItem implements Spend {
  type: SpendTypes;

  constructor(amount: number, type: SpendTypes = null) {
    super(amount);
    this.is = 'spend';
    this.type = type;
  }
}

class IncomeItem extends RecordItem {
  constructor(amount: number) {
    super(amount);
    this.is = 'income';
  }
}
