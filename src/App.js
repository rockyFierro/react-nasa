import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";

function App() {
  return (

    <Router>
      <div>
      <Route component={Home} path="/" exact />
      <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
    </Router>
  );
}

export default App;
