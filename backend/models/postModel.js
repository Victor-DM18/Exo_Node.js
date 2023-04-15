const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    likeers: {
      type: [String],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("post", postSchema);
