const mongoose = require("mongoose");
const { Schema } = mongoose;
//defines the structure of our document
//this fiels is required
//models surrounds that
const bookSchema = new Schema({
  book: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },
  pages: {
    type: String,
    required: true,
  },

comments: {
  type: String,
  required: true,
}
//auto assigns time for us

},{ timestamps: true


  //it will be an imageURL String
  // books: ["bookID"], //connect/match the id
  // numberOfBooksRead: Number,
  // lengthOfTimeSpent: Number,
  // numberOfDaysSpentInARow: Number,
});
//
mongoose.model("books", bookSchema);
//const Book = mongoose.model("book", bookSchema); 2020 net ninja
//a way of protecting the type
//defined the type of data and inserted guidelines
//will look for the books
//what type of  
module.exports = Book;