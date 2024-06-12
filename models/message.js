const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  senderId: {
    type: String,
    required: true,
  },
  Content: {
    type: String,
    required: true,
  },
  isbroadCast: {
    type: Boolean,
    default: false,
  },
  isDelete: {
    type: String,
    enum: ["Me", "EveryOne", "None"],
    default: "None",
  },
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const messageModel = mongoose.model("Message", messageSchema);

module.exports = messageModel;
