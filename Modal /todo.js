const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("TODO", todoSchema);

module.exports = Todo;
