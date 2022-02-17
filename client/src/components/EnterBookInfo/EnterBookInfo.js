import React from "react";
import "./EnterBookInfo.css";
import { useState } from "react";

const EnterBookInfo = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState("");
  const [length, setLength] = useState("");

  return (
    <div className="create">
      <h2> Enter Book Information </h2>
      <form>
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
        onChange={(e) => setPage(e.target.value)} />

        <label> Comment(s): </label>
        <textarea required></textarea>

        <label> Length </label>
        <select>
          <option value="5"> 5 mins </option>
          <option value="10"> 10 mins </option>
          <option value="15"> 15 mins </option>
          value={length}
          onChange={(e) => setLength(e.target.value)}
        </select>

        <br />
        <button> Add Book </button>
        <p>{title}</p>
        <p>{author}</p>
        <p>{page}</p>
      </form>
    </div>
  );
};

export default EnterBookInfo;

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
