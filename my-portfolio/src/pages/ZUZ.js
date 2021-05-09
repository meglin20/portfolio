
import React, {Component } from "react"; 
import Navbar from '../components/Navbar'
import zuz from '../Assets/zuz.png';
import '../Assets/zuz.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../components/Footer'



class ZUZ extends Component{
  render() {
      return(
      <div className="ZUZ">
        <Navbar/>
        <div id="title">
          <h2>ZUZ Project</h2>
        </div>
        <div id="hero">
          <img src={zuz}></img>
        </div>
        <Container class="content">
          <Row>
            <Col sm="1" md="6" lg="6">
            {/* Overview about the project */}
            <h3>Overview</h3>
              <p>ZUZ is a transparent payment and lending platform creates capital and generates liquidity in a community. It harnesses local networks and reputation so people can help each other and generate wealth at the same time, which reduces systemic bias against all small businesses.I am one of the three UI/UX designers in the team. We work with the front-end team and a graphic, logo designer to develop a prototype of the app. We aim to prototype a mobile app that serves both the merchants and customers and provides a simple way of conducting transactions with just a few clicks.</p>
            </Col>
            {/* Shows my role and the date of the project */}
            <Col id="description" sm="1" md="6" lg="6">
              <h3>Role</h3>
              <p>UI/UX Designer</p>
              <h3>Date</h3>
              <p>February 2021 -Current</p>
            </Col>
          </Row>
        </Container>
        <div id="reflection">
            <h3>What I learned...</h3>
            <div id="list">
              <p>Initially I was very nervous about joining a large team when the project was in full swing. I was also nervous about designing for this seemingly complicated user interactions. To overcome these struggles, I requested one-on-one meetings with people from different teams to better understand the the mechanisms of the transactions and the jargons used by different teams. I also asked many questions during UI/UX and front-end meetings.

Through actively participating in meetings and work sessions, I was not only able to catch up, but also contribute to the overall design direction by proposing the wireframes and posing important questions about the features we wanted in the MVP. It was especially rewarding when I was able to work with two other teammates to simplify the entire processes on the interface and provide a visualization of each step of the transaction to the entire team.</p>
            </div>
          </div>
        <Footer/>
        
      </div>
  );
  }
}

export default ZUZ  ;