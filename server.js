const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./utility/db.js");
const app = express();
const http = require("http");
const unique = require("uuid");
const mongoose = require("mongoose");

const { Server } = require("socket.io");

const messageModel = require("./models/message.js");
const { addMessage } = require("./Controller/message.controller.js");

const server = http.createServer(app);

app.use(express.json());

const io = new Server(server);

io.on("connection", (client) => {
  const clientId = unique.v1();
  console.log("made the Connection", clientId);
  client.on("chat", async (msg) => {
    console.log("Message", msg);
    io.emit("income", msg);
    await addMessage(clientId, msg);
  });
  client.on("disconnect", () => {
    console.log("disconnected");
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});

module.exports = {
  io,
};
