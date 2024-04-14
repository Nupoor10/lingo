import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Learn from "./pages/Learn/Learn";

function App() {
  return(
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route exact path="/learn" element={<Learn />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App