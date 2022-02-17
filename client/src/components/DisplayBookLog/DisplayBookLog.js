// import React from "react";
import {useState} from 'react';

const DisplayBookList = () => {
const [booklist , setBooklist] = useState ([
{title: 'GoodnightMoon', Author: 'Margaret Wise', pages: '25' , comment : 'great', id: 1}
]);


  return (
	  <div className = 'DisplayBookList'>
		{books.map((book) => (
			<div className = 'PreviewBookList'key={book.id}>
				<h2>My Book Cabinet </h2>

				</div>
		))}

	  </div>

  );

}

	
export default DisplayBookList;