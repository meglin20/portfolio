
import React, {Component } from "react"; 
import Navbar from '../components/Navbar'
import '../Assets/home.css';
import nacro from '../Assets/nacro.png';
import ItemCard from '../components/ItemCard'
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';


class Nacro extends Component{
  render() {
      return(
      <div className="Nacro">
        <Navbar/>
        
        <br></br>
        <br></br>
        <br></br>
        <img src={nacro}></img>
        <Container>
          <Row>
            <Col sm="1" md="6" lg="6"><p>This is a project for my 67-240 Mobile Design and Development Course at Carnegie Mellon University. I worked with two other teammates to redesign and implement the website of our client, NACRO. NACRO is an organization that developed to support corporate relations officers in both academia and industry.
  We worked closely with our client to understand their pain points and to create a new design that would resolve these usability issues and tailor the experience towards their target audience.</p></Col>
            <Col sm="1" md="6" lg="6">.col-6</Col>
          </Row>
        </Container>
        <p>This is a project for my 67-240 Mobile Design and Development Course at Carnegie Mellon University. I worked with two other teammates to redesign and implement the website of our client, NACRO. NACRO is an organization that developed to support corporate relations officers in both academia and industry.
We worked closely with our client to understand their pain points and to create a new design that would resolve these usability issues and tailor the experience towards their target audience.</p>
      </div>
  );
  }
}

export default Nacro;