import React from "react";
import "./EnterBookInfo.css";
import {useState} from "react";

const EnterBookInfo = () => {
    const [inputs, setInputs] = useState ({});

    const handleChange = (event) => {
     const name = event.target.name;
     const value = event.target.value;
     setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      // alert('inputs')
    }

    return (
      <div className="form">
      <h2> Enter Book Information </h2>
      
      <form onSubmit={handleSubmit}>
        <label> Book Name
          <input 
          type="text"
          name="title"
          value={inputs.title || ""} 
          onChange={handleChange}
          />
        </label>
        <div>
        <label> Authors
          <input 
          type="text"
          name="authors"
          value={inputs.authors || ""} 
          onChange={handleChange}
          />
          </label>
          </div>

          <div>
        <label> Pages(s)
          <input 
          type="number"
          name="pages"
          value={inputs.pages || ""} 
          onChange={handleChange}
          />
          </label>
          </div>
        <input type="submit" value="ok" />
      </form>
    // </div>
  );
};

export default EnterBookInfo;
