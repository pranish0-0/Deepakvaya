import React from "react";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Education from "./Components/Education";
import Experience from "./Components/Experience";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Hero />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/education" element={ <Education />} />
          <Route path="/experience" element={ <Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
