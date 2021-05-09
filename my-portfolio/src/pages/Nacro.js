
import React, {Component } from "react"; 
import Navbar from '../components/Navbar'
import nacro from '../Assets/nacro.png';
import '../Assets/nacro.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../components/Footer'



class Nacro extends Component{
  render() {
      return(
      <div className="Nacro">
        <Navbar/>
        <div id="title">
          <h2>NACRO Project</h2>
        </div>
        <div id="hero">
          <img src={nacro}></img>
        </div>
        <Container class="content">
          <Row>
            <Col sm="1" md="6" lg="6">
            <h3>Overview</h3>
              <p>This is a project for my 67-240 Mobile Design and Development Course at Carnegie Mellon University. I worked with two other teammates to redesign and implement the website of our client, NACRO. NACRO is an organization that developed to support corporate relations officers in both academia and industry.
  We worked closely with our client to understand their pain points and to create a new design that would resolve these usability issues and tailor the experience towards their target audience.</p>
            </Col>
            <Col id="description" sm="1" md="6" lg="6">
              <h3>Role</h3>
              <p>UI/UX Designer and Front-end Developer</p>
              <h3>Date</h3>
              <p>November-December 2020</p>
            </Col>
          </Row>
        </Container>
        <div id="reflection">
            <h3>What I learned...</h3>
            <div id="list">
              <li>Collaboration using GitHub</li>
              <li>Prototyping wireframes through Figma</li>
              <li>Practical application of user-centered web design</li>
            </div>
          </div>
          <Footer/>
      </div>
  );
  }
}

export default Nacro;