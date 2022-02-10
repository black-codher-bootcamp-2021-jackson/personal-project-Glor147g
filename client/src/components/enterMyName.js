import React from 'react';
import "../styles/app.css"

const enterMyFirstName =()=> {
return (
<form className = "enterMyFirstName" >
<label for ="uname"><b>Readers Name</b> </label>
<input type= "text"/>
<button type="submit"> OK </button>
</form>

);
};


export default enterMyFirstName;