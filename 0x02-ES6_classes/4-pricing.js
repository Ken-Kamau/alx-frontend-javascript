import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (amount instanceof Number) {
      this.amount = amount;
    }
    if (currency instanceof Currency) {
      this.currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    this._amount = amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency} (${this.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (amount && conversionRate instanceof Number) {
      return amount * conversionRate;
    }
    throw new TypeError('Amount and Conversion Rate should be instances of Number');
  }
}
