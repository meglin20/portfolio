
import React, {Component } from "react"; 
import Navbar from '../components/Navbar'
import '../Assets/home.css';
import ItemCard from '../components/ItemCard'
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import nacro from '../Assets/nacro.png';
import Project from '../pages/Project';


class Home extends Component{
  render() {
      return(
      <div className="Home">
        <Navbar/>
        <br></br>
        <div id="intro">
        <h1>Hi I'm Megan </h1>
        <h3>I major in Information Systems and Human-Computer Interaction at Carneige Mellon University</h3>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ItemCard image={nacro} title="NACRO" testvalue="nacro"/>
      </div>
  );
  }
}

export default Home;