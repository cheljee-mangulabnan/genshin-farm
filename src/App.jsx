import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
};

export default App;
