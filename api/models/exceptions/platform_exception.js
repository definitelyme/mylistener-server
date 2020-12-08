const Exception = require("./exception");

module.exports = class PlatformException extends Exception {
  constructor(name = null, message = null) {
    super(name, message);
    this.name = name;
    this.message = message;
  }

  toJson() {
    return JSON.parse(`{
        "name": ${JSON.stringify(this.name)},
        "message": ${JSON.stringify(this.message)}
    }`);
  }

  toString() {
    return `Exception(name: ${this.name}, message: ${this.message})`;
  }
}