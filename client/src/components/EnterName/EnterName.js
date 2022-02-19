import React from "react";

const EnterName = () => {
	//add function, assign it to the button
	const handleClick =()=>{
console.log ('Hello Readers');

	}
  return (
    <form className="enterName">
      <label for="uname">
        <b>Readers Name</b>{" "}
      </label>
      <input type="text" />
      <button onClick={handleClick()}> Add Name </button>
    </form>
  );
};

export default EnterName;

//onlick function and passing in handClick refe