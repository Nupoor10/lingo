import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Learn from "./pages/Learn/Learn";
import Objects from "./pages/Objects/Objects"
import Summary from "./pages/Summary/Summary"
import Grammar from "./pages/Grammar/Grammar"
import Concepts from "./pages/Concepts/Concepts"
import Translate from "./pages/Translate/Translate"

function App() {
  return(
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route exact path="/learn" element={<Learn />}/>
          <Route exact path="/objects" element={<Objects />}/>
          <Route exact path="/summary" element={<Summary />}/>
          <Route exact path="/grammar" element={<Grammar />}/>
          <Route exact path="/concepts" element={<Concepts />}/>
          <Route exact path="/translate" element={<Translate />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App