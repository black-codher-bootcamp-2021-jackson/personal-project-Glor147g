const mongoose = require("mongoose");
const Book = mongoose.model("books");
const Book = require('./models/book');

const bookRoutes = (app) => {
  app.get(`/api/book`, async (req, res) => {
    //create new instance of the book document within the code
  const book = new Book ({
    book:  " goodningt moon",
    author: "mwise",
    page: "45"
});

book.save()
    // const books = await Book.find(); //using the defined schema, look and find the prof/database
    return res.status(200)
    .send(book); //return it back to the databse
  });



//   app.post(`/api/book`, async (req, res) => {
//     //asyn: cant return a thing before we get a response ; insert a new person
//     const book = await Book.create(req.body);

//     return res.status(201).send({
//       error: false,
//       book,
//     });
//   });

//   app.put(`/api/book/:id`, async (req, res) => {
//     //update sthing in data base and pass in id etc
//     const { id } = req.params;

//     const book = await Book.findByIdAndUpdate(id, req.body);

//     return res.status(202).send({
//       error: false,
//       book,
//     });
//   });

//   app.delete(`/api/book/:id`, async (req, res) => {
//     //delete book from the data base
//     const { id } = req.params;

//     const book = await Book.findByIdAndDelete(id);

//     return res.status(202).send({
//       error: false,
//       book,
//     });
//   });
// };

module.exports = bookRoutes;
