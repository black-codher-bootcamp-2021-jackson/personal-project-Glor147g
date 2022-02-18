import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="title">
      <h2> "Connecting families through the joy of reading "! </h2>

      <ul className="PracticeAboutLogin">
        {/* <button on > Add A reader</button>
        <Link to="/search"> ok </Link> */}
        <li className="Start"> Start Reading </li>
        <li className="Amaia-Grace"> Amaia-Grace </li>
        <li className="Kai"> Kai </li>
      </ul>
    </div>
  );
};

export default Home;
