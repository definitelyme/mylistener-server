const Exception = require("./exception");

module.exports = class TranscriptException extends Exception {
  constructor(name = null, type = null, message = null, statusCode = null, parameter = null) {
    super(name, message);
    this.name = name;
    this.type = type;
    this.message = message;
    this.parameter = parameter;
    this.statusCode = statusCode;
  }

  toJson() {
    return JSON.parse(`{
      "name": ${JSON.stringify(this.name)},
      "type": ${JSON.stringify(this.type)},
      "statusCode": ${JSON.stringify(this.statusCode)},
      "message": ${JSON.stringify(this.message)}
      "parameter": ${JSON.stringify(this.parameter)}
    }`);
  }

  toString() {
    return `TranscriptException(name: ${this.name}, type: ${this.type}, message: ${this.message}, statusCode: ${this.statusCode}, parameter: ${this.parameter})`;
  }
}