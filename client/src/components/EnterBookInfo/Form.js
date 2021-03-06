import React from "react";
import "./Form.css";
import { useState } from "react";
// import { addBookToList} from "../../services/myEpicReader"
import {addBookToList} from "../../src/services/bookService";
// import {addBookToList} from "../../components/src/services/bookService";


//created state for each field
const Form = () => {
  const [title, setTitle] = useState("");
  console.log(title);
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState("");
  const [comment, setComment] = useState("");
  const [length, setLength] = useState("5");
  const [isPending, setIsPending] = useState(false);

  //add function to send/ then  data sending the data
 const addBook = async ()=>{
   console.log('im inside the add book function')
   const response = await addBookToList
  
   ({ 
     book: title, 
     author: author, 
     pages: page, 
     comment: comment,
     length: length 
    });

  
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('etargetvalue', e.target.value);
    // console.log('e and target', e.target);
    // console.log('eonly',e);
  
    addBook()

    // const book = { title, author, page, comment, length };
    // // console.log(book);
    // setIsPending(true);
    // // history.push('/');

    // fetch("http://localhost:3000/api/book", {
    //   method: "POST",
    //   headers: { "content-Type": "application/json" },
    //   body: JSON.stringify(book),
    // }).then(() => {
    //   // console.log("new book added");
    //   setIsPending(false);
    // });
  };
  

  return (
    <div className="create">
      <h2> Enter Book Information </h2>
      <form onSubmit={handleSubmit}>
        <label> Book Name: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label> Author(s): </label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          // //TWO WAY-BINDING the above allows me to update what is typed
        />
        <label> Page(s): </label>
        <input
          type="text"
          required
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />

        <label> Comment(s): </label>
        <textarea
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <label> Length </label>
        <select value={length} onChange={(e) => setLength(e.target.value)}>
          <option value="5"> 5 mins </option>
          <option value="10"> 10 mins </option>
          <option value="15"> 15 mins </option>
        </select>

        <br />
        {!isPending && <button> Add Book </button>}
        {isPending && <button disabled> Adding Book.... </button>}
        <p>{title}</p>
        <p>{author}</p>
        <p>{page}</p>
        <p>{comment}</p>
        <p>{length}</p>
      </form>
    </div>
  );
};

export default Form;

// const EnterBookInfo = () => {
//     const [inputs, setInputs] = useState ({});

//     const handleChange = (event) => {
//      const name = event.target.name;
//      const value = event.target.value;
//      setInputs(values => ({...values, [name]: value}))
//     }

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       // alert('inputs')
//     }

//     return (
//       <div className="form">
//       <h2> Enter Book Information </h2>
//       <form onSubmit={handleSubmit}>
//         <label> Book Name
//           <input
//           type="text"
//           name="title"
//           value={inputs.title || ""}
//           onChange={handleChange}
//           />
//         </label>
//         <div>
//         <label> Authors
//           <input
//           type="text"
//           name="authors"
//           value={inputs.authors || ""}
//           onChange={handleChange}
//           />
//           </label>
//           </div>

//           <div>
//         <label> Pages(s)
//           <input
//           type="number"
//           name="pages"
//           value={inputs.pages || ""}
//           onChange={handleChange}
//           />
//           </label>
//           </div>
//         <input type="submit" value="ok" />

//       </form>
//     </div>
//   );
// };
