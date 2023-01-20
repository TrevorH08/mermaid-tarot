import React from "react";
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './../img/mermaid-tarot-logo.png';

function Header(){

  // const mermaidLogo = Logo;
  // const headerStyle = {
  //   border: "1px solid black",
  //   backgroundColor: "#e5d9c3"
  // }

  // const logoStyle = {
  //   mix-blend-mode: color-burn
  // }

  return (
    <React.Fragment>
      <div id="header">
      <h1>Mermaid Tarot</h1>
      <ul className="headerList">
        <li>
          <Link to="/" className="homeLink">Home</Link>
        </li>
        <li>
          <Link to="/Gallery" className="galleryLink">Gallery</Link>
        </li>
        <li>
          <Link to="/ContactMe" className="contactLink">Contact Me</Link>
        </li>
      {/* <Navbar className="navbar fixed-top navbar-light bg-light py-0" style={headerStyle}>
        <img src="mermaidLogo"></img>
        <h1>Mermaid Tarot</h1>
      </Navbar> */}
      </ul>
      </div>
    </React.Fragment>
  );
}

export default Header;