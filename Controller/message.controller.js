const messageModel = require("../models/message");
const { io } = require("../server");

const addMessage = async (clientId, msg) => {
  try {
    console.log("in Addmessage Controller");
    console.log(clientId);
    const senderId = clientId.toString();
    const Content = msg;

    const newMessage = new messageModel({
      senderId: senderId,
      Content: Content,
    });
    await newMessage
      .save()
      .then(() => {
        console.log("messsage saved");
        // io.emit("incoming", msg);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMessage,
};
