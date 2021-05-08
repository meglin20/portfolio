
import React, {Component } from "react"; 
import Navbar from '../components/Navbar'
import '../Assets/home.css';
import ItemCard from '../components/ItemCard'
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";


class Nacro extends Component{
  render() {
      return(
      <div className="Nacro">
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <img src={this.props.image}></img>
        <h1>{this.props.title}</h1>
        <h2>hi</h2>
      </div>
  );
  }
}

export default Nacro;