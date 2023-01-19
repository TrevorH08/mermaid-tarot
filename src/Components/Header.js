import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './../img/mermaid-tarot-logo.png';

function Header(){
  const headerStyle = {
    border: "1px solid black",
    backgroundColor: "#e5d9c3"
  }

  // const logoStyle = {
  //   mix-blend-mode: color-burn
  // }

  return (
    <React.Fragment>
      <Navbar className="navbar fixed-top navbar-light bg-light py-0" style={headerStyle}>
        <img src="Logo"></img>
        <h1>Mermaid Tarot</h1>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;