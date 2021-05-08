import React, {Component } from "react"; 
import '../Assets/navigation.css';
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render(){
    return(
      <div id="top_row">
        <header class= "website-title">
          {/* <img id="logp" src="images/logop.png"></img> */}
          <h1>Megan Lin</h1>
        </header>
        <nav>
          <Link to="/home"><a href="">Home</a></Link>
          <Link to="/work"><a href="">Work</a></Link>
          <Link to="/about"><a href="about.html">About</a></Link>
        </nav>
      </div>
      
    );
  }
}

export default Navbar;