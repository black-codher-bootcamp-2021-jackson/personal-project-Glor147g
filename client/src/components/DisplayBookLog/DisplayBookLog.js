// import React from "react";
import {useState} from 'react';
import './DisplayBookLog.css';

const DisplayBookList = () => {
const [books , setBooks] = useState ([
{title: 'GoodnightMoon', Author: 'Margaret Wise', pages: '25' , comment : 'great', id: 1},
{title: 'GoodMoon', Author: 'Maise', pages: '25' , comment : 'great', id: 2},

{title: 'Goooon', Author: 'MarWise', pages: '25' , comment : 'great', id: 3}
]);


  return (
	
	  <div className = 'DisplayBookList'>
		  <button> Add A book </button>
		{books.map((book) => (
			<div className = 'PreviewBookList'key={book.id}>
				<h2>{book.title} </h2>
				<p>by{book.Author}</p>
				<p>pages{book.pages}</p>
				<p>comment{book.comment}</p>

				</div>
		))}

	  </div>

  );

}

	
export default DisplayBookList;