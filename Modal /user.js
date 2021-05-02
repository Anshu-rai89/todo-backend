const mongoose = require("mongoose");

const userScema = new mongoose.Schema(
  {
    email: {
      type: String,
      reuired: true,
      unique: true,
    },
    name: {
      type: String,
      reuired: true,
    },
    password: {
      type: String,
      reuired: true,
    },
    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TODO",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userScema);

module.exports = User;
