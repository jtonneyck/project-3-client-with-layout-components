import React from 'react';
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Students from "./pages/Students";

function App (props) {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      
      <Route path="/students" component={Students}/>

    </div>
  )
}

export default App

