const MessageTypes = require("./messageTypes");

class Response {
  constructor(data = null, message = null) {
    this.data = data;
    this.message = message;
    this.hasError = this.message && this.message != null && this.message.type == MessageTypes.Error;
  }
}

module.exports = Response;
