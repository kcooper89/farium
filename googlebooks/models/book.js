// create the mongoose model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  authors: {
    type: [String],
    trim: true,
    required: "String is Required"
  },
  title: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  description: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  image: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  link: {
    type: String,
    trim: true,
    required: "String is Required"
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
