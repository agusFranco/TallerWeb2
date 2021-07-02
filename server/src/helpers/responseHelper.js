const Response = require("../models/common/response");
const Message = require("../models/common/message");
const MessageTypes = require("../models/common/messageTypes");

class ResponseHelper {
  static createBadRequestResponse(response, message) {
    response.statusCode = 400;
    response.send(new Response(null, new Message(message, MessageTypes.Error)));
  }

  static createNotFoundResponse(response, message) {
    response.statusCode = 404;
    response.send(new Response(null, new Message(message, MessageTypes.Error)));
  }

  static createNotAuthorizedResponse(response) {
    response.statusCode = 401;
    response.send(new Response(null, new Message("Not Authorized.", MessageTypes.Error)));
  }

  static createSuccessResponse(response, data = null, message = null) {
    response.send(
      new Response(
        data,
        message != null ? new Message(message, MessageTypes.Success) : null
      )
    );
  }
}

module.exports = ResponseHelper;
