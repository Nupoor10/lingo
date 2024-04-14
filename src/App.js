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
import Greetings from "./pages/Greetings/Greetings";
import Alphabets from "./pages/Alphabets/Alphabets"
import Numbers from "./pages/Numbers/Numbers"
import Colors from "./pages/Colors/Colors"
import DaysAndMonths from "./pages/DaysAndMonths/DaysAndMonths";
import Tenses from "./pages/Tenses/Tenses"
import PartsOfSpeech from "./pages/PartsOfSpeech/PartsOfSpeech"

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
          <Route exact path="/greetings" element={<Greetings />}/>
          <Route exact path="/alphabets" element={<Alphabets />}/>
          <Route exact path="/numbers" element={<Numbers />}/>
          <Route exact path="/colors" element={<Colors />}/>
          <Route exact path="/daysandmonths" element={<DaysAndMonths />}/>
          <Route exact path="/tenses" element={<Tenses />}/>
          <Route exact path="/partsofspeech" element={<PartsOfSpeech />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App