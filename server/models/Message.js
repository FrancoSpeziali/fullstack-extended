const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({});

const Message = mongoose.model("user", MessageSchema);

module.exports = Message;
