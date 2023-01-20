import React from "react";
import Logo from "../img/mermaid-tarot-logo.png";

const Home = () => {
  return (
    <div id='aboutUs'>
      <h1 className="aboutUsHeader">About Mermaid Tarot</h1>
      {/* <img className="mermaidTarot" src={Logo} alt="Mermaid Tarot Logo" height={300} width={300} /> */}
      <p className="aboutText">
        Hi! My name is Ariel, and I am the owner of Mermaid Tarot. If you are here to seek a reading, you can look below at my different session options and book!
      </p>
      <br />
      <div id="homeImage">

      </div>
    </div>
  );
};

export default Home;