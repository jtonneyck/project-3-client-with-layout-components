import React, { Component } from 'react'
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Students from "./pages/Students";

class App extends Component {
  constructor(props) {
    super(props)


  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        
        <Route path="/students" component={Students}/>

      </div>
    )
  }
}

export default App

