const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  first_name: String,
  Age: Number,
  Image: String, //it will be an imageURL String
  books: ["bookID"], //connect/match the id
  numberOfBooksRead: Number,
  lengthOfTimeSpent: Number,
  numberOfDaysSpentInARow: Number,
});
//
mongoose.model("profiles", profileSchema);
//a way of protecting the type
//defined the type of data and inserted guidelines
