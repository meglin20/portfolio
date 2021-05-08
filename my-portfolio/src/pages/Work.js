import React, {Component } from "react"; 
import Navbar from '../components/Navbar'
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";


class Work extends Component{
  render() {
      return(
      <div className="Work">
        <Navbar/>
        <h2> Hello </h2>
        
      </div>
  );
  }
}

export default Work;