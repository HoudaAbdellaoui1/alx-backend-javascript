export default class Airport {
  constructor(name, code) {
    if ((typeof name) !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;

    if ((typeof code) !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  //   toString() {
  //     return `Airport [${this.code}] {_name: '${this.name}', _code: '${this.code}'}}`;
  //   }

  //   toString() {
  //     return this.toString();
  //   }

  valueOf() {
    return this._code; // Return the airport code
  }
}
