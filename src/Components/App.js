import React from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery/Gallery";
import Contact from "./ContactMe";
import Policies from "./Policies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
      <Route exact path='/' element={<Home />} />
        {/* <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/Contact' element={<Contact/>} /> */}
      </Routes>
      <Footer />
      </Router>
    </div>
    // <React.Fragment>
    //   <Header />
    //   <h1>Welcome to Mermaid Tarot</h1>
    //   <h2>Take a look at the different packages and book below! Cards coming soon</h2>
    //   <hr/>
    // </React.Fragment>
  );
}

export default App;