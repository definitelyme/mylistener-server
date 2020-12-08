module.exports = class Exception {
  constructor(name, message) {
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