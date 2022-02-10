const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  first_name: String,
  last_name: String,
  location: String,
  books: ["bookID"], //connect/match the id
  numberOfBooksRead: Number,
  lengthOfTimeSpent: Number,
  numberOfDaysSpentInARow: Number,
});
//
mongoose.model("profiles", profileSchema);
//a way of protecting the type
//defined the type of data and inserted guidelines
