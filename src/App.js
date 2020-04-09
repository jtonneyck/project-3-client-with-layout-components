import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddStudent from './pages/AddStudent';
import Students from './pages/Students';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         person: {}
    }
  }
  componentDidMount(){
    axios.get("http://localhost:3000/name")
      .then((response)=> {
        this.setState({person: response.data})
      })
      .catch(err=> {
        debugger
      })
  }
  render() {
    return (
      <div>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/students" component={Students}/>
        <Route path="/add-student" component={AddStudent}/>

      </div>
    )
  }
}

export default App

