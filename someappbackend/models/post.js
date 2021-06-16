const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 5,
    maxlength: 200,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  likes: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: String,
    },
  ],
});

postSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Post", postSchema);
