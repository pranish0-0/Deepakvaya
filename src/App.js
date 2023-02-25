import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Experience from "./Components/Experience";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Deepakvaya" element={ <Home />} />
          <Route path="/" element={ <Home /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/education" element={ <Education />} />
          <Route path="/experience" element={ <Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
