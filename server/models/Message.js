const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({});

const Message = mongoose.model("message", MessageSchema);

module.exports = Message;
