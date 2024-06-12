const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  participants: [
    {
      type: String,
      required: true,
    },
  ],
  chatType: {
    type: String,
    enum: ["one on one", "group"],
    required: true,
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

const chatModel = mongoose.model("Chat", chatSchema);

module.exports = chatModel;
