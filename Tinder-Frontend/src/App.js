import './App.css';
import Header from './header';
import TinderCards from './TinderCards.js';
import Buttons from "./buttons.js";
import React from "react";


function App() {
  return (

      <div className="App">
        <Header />
        <TinderCards/>
        <Buttons />
      </div>
      
  );
}

export default App;
