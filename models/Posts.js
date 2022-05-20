const { Schema, model } = require("mongoose");

const Posts = Schema({
  user:{
    type: Object,
    required: true,
  },
  postId:{
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  mainimage:{
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
});

module.exports = model("Post", Posts);