// before
class PersonWithNumber {
  name: string;
  phone: string;
  officeCode: string;

  constructor(name: string, phone: string, officeCode: string) {
    this.name = name;
    this.phone = phone;
    this.officeCode = officeCode;
  }

  phoneNumberOf = (): string => {
    return `${this.phone} доб. ${this.officeCode}`;
  };
}

// after
interface PhoneNumber {
  phone: string;
  officeCode: string;
  valueOf(): string;
}

class PhoneNumber implements PhoneNumber {
  phone: string;
  officeCode: string;

  constructor(phone: string, officeCode: string) {
    this.phone = phone;
    this.officeCode = officeCode;
  }

  valueOf = (): string => {
    return `${this.phone} доб. ${this.officeCode}`;
  };
}

class Person {
  name: string;
  phoneNumber: PhoneNumber;

  constructor(name: string, phoneNumber: PhoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  phoneNumberOf = (): string => {
    return this.phoneNumber.valueOf();
  };
}
