export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(CodeValue) {
    if (typeof CodeValue !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = CodeValue;
  }

  set name(CurrencyName) {
    if (typeof CodeValue !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._name = CurrencyName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
